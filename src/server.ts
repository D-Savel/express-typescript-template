import express, { Express, Request, Response } from 'express';
import cors from "cors";
import helmet from "helmet";
import * as dotenv from 'dotenv';
import morganMiddleware from './middlewares/morgan/morganMiddleware';
import { overAllLimiter } from './config/express-rate-limit/rateLimit';
import route from "./routes/routes";

// ==========
// App initialization
// ==========
const app: Express = express();

dotenv.config();
const PORT = process.env.PORT || 9000


// ==========
// middlewares config
// ==========

// Cors
const corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
  optionsSuccessStatus: 404,
  credentials: true,
  exposedHeaders: ["x-auth-token"],
};

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(overAllLimiter)
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
app.use(
  helmet.referrerPolicy({
    policy: "no-referrer",
  })
)
app.use(cors(corsOptions));
app.use(morganMiddleware)


// ==========
// App routers
// ==========

app.use("/", route);

// ==========
// App start
// ==========

app.listen(PORT,
  () => {
    console.log(`😓 Server is listening on port ${PORT}  😓 `);
  });