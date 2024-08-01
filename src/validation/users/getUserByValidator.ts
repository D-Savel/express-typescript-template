import { query, checkExact } from "express-validator";

export const getUserByValidator = [
  checkExact(
    [query("username")
      .trim()
      .escape()
      .optional()
      .notEmpty()
      .withMessage('username data is required to update value')
      .isString()
      .withMessage('username is not valid, must be a string')
      .customSanitizer((userName) => {
        return userName.replace(/^\w/, (c: string) => c.toUpperCase());
      }),
    query('email')
      .trim()
      .escape()
      .optional()
      .notEmpty()
      .withMessage('email data is required to update value')
      .bail()
      .isEmail()
      .withMessage('Please provide valid email'),
    ],
    {
      message: 'invalid field()s in query',
    }
  )
];