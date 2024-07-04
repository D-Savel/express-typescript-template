import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import { DatabaseError } from "../../../errors/DatabaseError";
import User from "../../../types/User";


function findUser(id: string) {
  const user = users.find((item) => {
    return item.id == id
  });
  return user
};

async function fetchUsers(newUsers: any): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newUsers)
    },
      1000
    )
  })
};

const updateUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    if (findUser(id)) {
      const newUsers = users.map((user) => {
        if (user.id === id) {
          req.body.username ? user.username = req.body.username : null
          req.body.email ? user.email = req.body.email : null
          req.body.password ? user.password = req.body.password : null
        }
        return user
      })
      const usersResponse = await fetchUsers(newUsers)
      sendSuccess(res, 201, `User for Id: ${req.params.id} has been successfully updated`, usersResponse)
    } else {
      throw new DatabaseError(`{user controller error (updateUsersById: No user matches with id ${req.params.id})`);
    }
  } catch (error) {
    next(error)
  }
}

export default updateUserById;