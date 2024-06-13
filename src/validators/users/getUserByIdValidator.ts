import { param } from "express-validator"

export const getUserByIdValidator = [
  param("id")
    .trim()
    .escape()
    .exists()
    .notEmpty()
    .withMessage('user id is required in url path = http://serverHost/api/users/user/{id}')
    .bail()
    .isUUID(4)
    .withMessage('username is not valid, must be a UUID version 4')
]