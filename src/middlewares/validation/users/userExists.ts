import { Request, Response, NextFunction } from "express";
import { users } from "../../../datas/users";
import { DuplicateUserError } from "../../../errors/DuplicateUserError";

const userExists = (req: Request, res: Response, next: NextFunction) => {
  const { username, email } = req.body;
  try {
    for (const user of users) {
      if (user.email! === email || user.username! === username) {
        const duplicateEmail = email;
        const duplicateUsername = username;
        throw new DuplicateUserError(`${(user.username! === username) ? `username:${duplicateUsername}` : ''}${(user.email! === email) ? `, email:${duplicateEmail}` : ''} already exist(s) for users`);
      };
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

export default userExists;