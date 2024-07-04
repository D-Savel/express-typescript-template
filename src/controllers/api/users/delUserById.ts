import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import User from "../../../types/User";
import { DatabaseError } from "../../../errors/DatabaseError";



function findUser(id: string) {
  const user = users.find((item) => {
    return item.id == id;
  });
  return user;
};

async function fetchUsers(newUsers: any): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newUsers);
    },
      1000
    );
  });
};

const deleteUserById = async (req: Request, res: Response, next: NextFunction) => {
  let newUsers: User[];
  try {
    const { id } = req.params;
    if (findUser(id)) {
      newUsers = users.filter((user) => (user.id !== id));
      const usersResponse = await fetchUsers(newUsers);
      sendSuccess(res, 200, `User with Id: ${req.params.id} has been successfully deleted`, usersResponse);
    } else {
      throw new DatabaseError(`{user controller error (delUsersById: No user matches with id ${req.params.id})`);
    }
  } catch (error) {
    next(error);
  }
};

export default deleteUserById;