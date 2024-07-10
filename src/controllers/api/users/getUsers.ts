import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import fetchUsers from "../../../services/users/fetchUsers";


const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usersResponse = await fetchUsers(users);
    if (usersResponse) {
      sendSuccess(res, 200, `Users list successfully retreived`, usersResponse);
    }
    // uncomment or comment next or previous lines ( const resp.... and if ...) to simulate error or not;
    // throw new DatabaseError('user controller error (getUsers')
  } catch (error) {
    return next(error);
  }
};

export default getUsers;