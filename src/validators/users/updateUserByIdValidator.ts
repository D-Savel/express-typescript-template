import { body } from 'express-validator';


export const updateUserValidator = [
  body('username')
    .trim()
    .escape()
    .optional()
    .notEmpty()
    .withMessage('username data is required to update value')
    .isString()
    .withMessage('username is not valid, must be a string')
    .customSanitizer((userName) => {
      return userName.replace(/^\w/, (c: string) => c.toUpperCase())
    }),
  body('email')
    .trim()
    .escape()
    .optional()
    .notEmpty()
    .withMessage('email data is required to update value')
    .bail()
    .isEmail()
    .withMessage('Please provide valid email')
    .customSanitizer((email) => {
      return email.toLowerCase()
    }), ,
  body('password')
    .trim()
    .escape()
    .optional()
    .notEmpty()
    .withMessage('password data is required to update value')
    .bail()
    .isString()
    .isLength({ min: 4, max: 20 })
    .withMessage('password must be between 4 and 20 characters'),
]



