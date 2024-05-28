import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';


// ==========
// App initialization
// ==========
const app: Express = express();

dotenv.config();
const PORT = process.env.PORT || 9000;

const expressOpeningController = (req: Request, res: Response) => {
  res.status(200).send(`😓  😺  Hello World ! - Express server is running on ${PORT} - great!!  😺  😓`);
};

export default expressOpeningController

