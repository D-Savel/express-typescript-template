import { Request, Response } from "express";

const userController = (req: Request, res: Response) => {
  res.status(200).send(`congratulations visitor! - You are on /users Route`);
};

export default userController
