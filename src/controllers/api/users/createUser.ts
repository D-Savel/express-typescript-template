import { Request, Response, NextFunction } from "express";
import addUser from "../../../services/users/addUser";
import User from "../../../types/Users/User";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import crypto from 'crypto';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('pass through userCreate controller');
    const { username, email, password } = req.body;
    const id = crypto.randomUUID();
    const capitalizedUsername = username[0].toUpperCase() + username.slice(1).toLowerCase();
    const newUser = { id, username: capitalizedUsername, email, password };
    let userResponse = await addUser(newUser);
    sendSuccess(res, 201, `User ${newUser.username} successfully created`, { user: userResponse });
  } catch (error) {
    console.log(error);
  }
};

export default createUser;