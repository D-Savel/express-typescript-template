import { NextFunction, Request, Response } from "express";
import User from "../../types/User";
import { users } from "../../datas/users";
import { DatabaseError } from "../../errors/DatabaseError";
import { NotFoundError } from "../../errors/NotFoundError";
import { RequestValidationError } from "../../errors/RequestValidationError";
import { ValidationError } from "express-validator";

function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(users);
      // uncomment or comment next or previous line to simulate error or not;
      reject(new DatabaseError)
    },
      2000
    )
  })
}

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await fetchUsers()
    if (response) {
      res.status(200).send({ response: true, users: response, message: `You're on api/users route` })
    } else {
      res.status(500).send({ response: false, users: response, message: `You're on api/users route` })
    }
  } catch (error) {
    console.log(error);
    next(error)
  }
}

export default getUsers;