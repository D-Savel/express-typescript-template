import { Request, Response, NextFunction } from "express";
import addUser from "../../../services/users/addUser";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import crypto from 'crypto';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;
    const id = crypto.randomUUID();
    const capitalizedUsername = username[0].toUpperCase() + username.slice(1).toLowerCase();
    const newUser = { id, username, email, password };
    const userResponse = addUser(newUser);
    sendSuccess(res, 201, `User ${newUser.username} successfully created`, userResponse);
  } catch (error) {
    console.log(error);
  }
};

export default createUser;