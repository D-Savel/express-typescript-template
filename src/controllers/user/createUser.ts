import { Request, Response, NextFunction } from "express";
import User from "../../types/User";
import { users } from "../../datas/users";


// add user to users without update data in "../../datas/users" to simulate create request
async function createUser(newUser: User) {
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


const userCreate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body
    const newUser = { name, email, password }
    const response = await createUser(newUser)
    const users = await fetchUsers()
    res.status(200).send({ response: 'ok', users, message: `You're on api/user/create route` });
  } catch (error) {
    next(error)
    console.log(error);
  }
}

export default userCreate;
