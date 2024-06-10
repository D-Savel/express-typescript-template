import { NextFunction, Request, Response } from "express";
import User from "../../types/User";
import { users } from "../../datas/users";
import { DatabaseError } from "../../errors/DatabaseError";
import { ValidationError } from "express-validator";

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
    // const response = await fetchUsers()
    // if (response) {
    //   res.status(200).send({ response: true, users: response, message: `You're on api/users route` })
    // }
    // uncomment or comment next or previous lines ( const resp.... and if ...) to simulate error or not;
    throw new DatabaseError('user controller error')
  } catch (error) {
    next(error)
  }
}

export default getUsers;