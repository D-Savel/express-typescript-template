import { query } from "express-validator";

export const getUserByUsernameValidator = [
  query("username")
    .trim()
    .escape()
    .exists()
    .notEmpty()
    .withMessage("username is required in query string (example: ?username='John') or id in path (example: /api/users/user/45cc8cdc-e36e-4970-af37-fee9088e2fb0")
    .bail()
    .isString()
    .withMessage('username is not valid, must be a string')
];