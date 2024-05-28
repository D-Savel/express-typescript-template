import { Request, Response } from "express";

export const userController = (req: Request, res: Response) => {
  res.status(200).send(`congratulations visitor! - You are on /users Route`);
};
