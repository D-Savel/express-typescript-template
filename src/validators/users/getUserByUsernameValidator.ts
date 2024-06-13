import { query } from "express-validator"

export const getUserByUsernameValidator = [
  query("username")
    .trim()
    .escape()
    .exists()
    .notEmpty()
    .withMessage("username is required in query string (?username='John')")
    .bail()
    .isString()
    .withMessage('username is not valid, must be a string')
]