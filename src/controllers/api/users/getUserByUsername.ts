import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import { DatabaseError } from "../../../errors/DatabaseError";
import User from "../../../types/User";


function searchUser(username: string) {
  const user = users.find((item) => {
    return item.username == username;
  });
  return user;
};

function fetchUser(user: User): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    },
      2000
    );
  });
};

const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const username = req.query.username as string;
    const capitalizedUsername = username[0].toUpperCase() + username.slice(1).toLowerCase();
    const findUser = searchUser(capitalizedUsername);
    if (findUser) {
      const user = await fetchUser(findUser);
      sendSuccess(res, 200, `User  info for username: ${user.username} successfully retreived`, user);
    } else {
      throw new DatabaseError(`{user controller error (getUsersByUsername: No user matches with username ${req.query.username})`);
    }
    // uncomment or comment next or previous lines ( const resp.... and if ...) to simulate error or not;
    // throw new DatabaseError('user controller error')
  } catch (error) {
    next(error);
  }
};

export default getUserByUsername;