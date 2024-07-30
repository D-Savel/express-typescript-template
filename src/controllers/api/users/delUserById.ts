import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import User from "../../../types/Users/User";
import { DatabaseError } from "../../../errors/DatabaseError";
import fetchUser from "../../../services/users/fetchUser";



function findIndex(_id: string): number {
  const userIndex = users.findIndex(el => el.id === _id);
  return userIndex;
}


const deleteUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (findIndex(id) !== undefined) {
      const index = findIndex(id);
      const [deletedUser] = users.splice(index!, 1);
      const response = await fetchUser(deletedUser);
      console.log(`user ${deletedUser.username} with id ${deletedUser.id} has been deleted`);
      sendSuccess(res, 200, `User with Id: ${req.params.id} has been successfully deleted`, null);
    } else {
      throw new DatabaseError(`{user controller error (delUsersById: No user matches with id ${req.params.id})`);
    }
  } catch (error) {
    return next(error);
  }
};

export default deleteUserById;