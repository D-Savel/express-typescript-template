import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import { DatabaseError } from "../../../errors/DatabaseError";

function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    },
      2000
    )
  })
}

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await fetchUsers()
    // if (users) {
    //   sendSuccess(res, 200, `Users list successfully retreived`, users)
    // }
    // uncomment or comment next or previous lines ( const resp.... and if ...) to simulate error or not;
    throw new DatabaseError('user controller error (getUsers')
  } catch (error) {
    next(error)
  }
}

export default getUsers;