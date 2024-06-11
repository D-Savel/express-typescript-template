import { Request, Response, NextFunction } from "express";
import User from "../../../types/User";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";


// add user to users without update data in "../../datas/users" to simulate create request
async function addUser(newUser: User) {
  try {
    users.push(newUser)
  } catch (error) {
    console.log(error)
  }
}

async function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users)
    },
      1000
    )
  })
}


const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body
    const newUser = { username, email, password }
    const response = await addUser(newUser)
    const users = await fetchUsers()
    sendSuccess(res, 200, `User ${username} successfull created`, users)
  } catch (error) {
    next(error)
    console.log(error);
  }
}

export default createUser;