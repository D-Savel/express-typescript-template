import express, { Express, NextFunction, Request, Response } from 'express';
import cors from "cors";
import helmet from "helmet";
import * as dotenv from 'dotenv';
import morganMiddleware from './middlewares/morgan/morganMiddleware';
import { overAllLimiter } from './config/express-rate-limit/rateLimit';
import { errorHandler } from './middlewares/error/errorHandler';
import routes from './routes';
import { NotFoundError } from './errors/NotFoundError';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


// ==========
// App initialization
// ==========

export const app: Express = express();  // export for testing

dotenv.config();
const PORT = process.env.PORT || 9000;

// ==========
// middlewares config
// ==========

// Swagger

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "express template Documentation",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    servers: [{ url: "http://localhost:9000/" }],
  },
  // looks for configuration in specified directories
  apis: [`${__dirname}/routes/**/*.ts`],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Cors
const corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
  optionsSuccessStatus: 404,
  credentials: true,
  exposedHeaders: ["x-auth-token"],
};

// Middlewares
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(overAllLimiter);
app.use(helmet());

app.use(
  // Helmet config

  // overriding "font-src" and "style-src" while
  // maintaining the other default values

  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "font-src": ["'self'", "external-website.com"],
      // allowing styles from any website
      "style-src": null,
    }
  })
);

// overriding "referrerPolicy" while
// maintaining the other default values

app.use(
  helmet.referrerPolicy({
    policy: "no-referrer",
  })
);

app.use(cors(corsOptions));
app.use(morganMiddleware);

// ==========
// App routers
// ==========
app.use("/", routes);

// Handles 404 errors
app.use((req: Request, res: Response, next: NextFunction) => {
  try {
    throw new NotFoundError("Route doesn't exist");
  } catch (error) {
    return next(error);
  }
}
);

app.use(errorHandler);


// ==========
// App start
// ==========

app.listen(PORT,
  () => {
    console.log(`😓 Server is listening on port ${PORT} 😓 `);
  });