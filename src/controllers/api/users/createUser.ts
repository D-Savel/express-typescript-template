import { Request, Response, NextFunction } from "express";
import User from "../../../types/User";
import { users } from "../../../datas/users";
import { sendSuccess } from "../../../utils/express/sendSuccess";
import crypto from 'crypto';

// add user to users without update data in "../../datas/users" to simulate create request
function addUser(newUser: User) {
  try {
    users.push(newUser)
  } catch (error) {
    console.log(error)
  }
};

async function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users)
    },
      1000
    )
  })
};


const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body
    const id = crypto.randomUUID()
    const capitalizedUsername = username[0].toUpperCase() + username.slice(1).toLowerCase()
    const newUser = { id, username, email, password }
    const newusUsers = addUser(newUser)
    const users = await fetchUsers()
    sendSuccess(res, 201, `User ${username} successfully created`, users)
  } catch (error) {
    next(error)
    console.log(error);
  }
};

export default createUser;