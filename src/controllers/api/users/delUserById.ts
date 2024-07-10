import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import User from "../../../types/User";
import { DatabaseError } from "../../../errors/DatabaseError";
import fetchUser from "../../../services/users/fetchUser";

function findUser(_id: string): User {
  const user = users.find((item) => {
    return item.id == _id;
  });
  return user!;
};

function findIndex(_id: string): number {
  const userIndex = users.findIndex(el => el.id === _id);
  return userIndex;
}


const deleteUserById = async (req: Request, res: Response, next: NextFunction) => {
  let newUsers: User[];
  try {
    const { id } = req.params;
    if (findUser(id)) {
      const index = findIndex(id);
      const [deletedUser] = users.splice(index!, index!);
      const userResponse = await fetchUser(deletedUser);
      sendSuccess(res, 200, `User with Id: ${req.params.id} has been successfully deleted`, userResponse);
    } else {
      throw new DatabaseError(`{user controller error (delUsersById: No user matches with id ${req.params.id})`);
    }
  } catch (error) {
    return next(error);
  }
};

export default deleteUserById;