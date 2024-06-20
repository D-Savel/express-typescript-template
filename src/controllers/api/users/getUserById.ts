import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import { DatabaseError } from "../../../errors/DatabaseError";
import User from "../../../types/User";

function searchUser(id: string) {
  const user = users.find((item) => {
    return item.id == id
  });
  return user
};

function fetchUser(user: User): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user)
    },
      2000
    )
  })
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const findUser = searchUser(id);
    if (findUser) {
      const user = await fetchUser(findUser)
      sendSuccess(res, 200, `User  info for ID: ${id} successfully retreived`, user)
    } else {
      throw new DatabaseError(`{user controller error (getUsersById: No user matches with id ${req.params.id})`);
    }
    // uncomment or comment next or previous lines ( const resp.... and if ...) to simulate error or not;
    // throw new DatabaseError('user controller error');
  } catch (error) {
    next(error)
  }
}

export default getUserById;