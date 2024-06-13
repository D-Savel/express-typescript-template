import { NextFunction, Request, Response } from "express";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import { DatabaseError } from "../../../errors/DatabaseError";


function fetchUserByUserName(query: string) {
  const user = users.find((item) => {
    return item.username == query
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user),
        2000
    })
  })
}

const getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.query
    const user = await fetchUserByUserName(username as string)
    if (user) {
      sendSuccess(res, 200, `User  info for ${username} successfully retreived`, user)
    } else {
      throw new DatabaseError(`{user controller error (getUsersByUsername: No user matches with username ${req.query.username})`);
    }
    // uncomment or comment next or previous lines ( const resp.... and if ...) to simulate error or not;
    // throw new DatabaseError('user controller error')
  } catch (error) {
    next(error)
  }
}

export default getUserByUsername;