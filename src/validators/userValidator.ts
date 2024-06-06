import { body } from "express-validator"

export const userValidator = [
  body('name').escape()
    .trim()
    .escape()
    .exists()
    .notEmpty()
    .withMessage('Name is required')
    .bail()
    .isString()
    .withMessage('Name is not valid, must be a string')
    .customSanitizer((userName) => {
      return userName.replace(/^\w/, (c: string) => c.toUpperCase())
    }),
  body('email')
    .trim()
    .escape()
    .exists()
    .notEmpty()
    .withMessage('Email address is required')
    .bail()
    .isEmail()
    .withMessage('Please provide valid email')
    .customSanitizer((email) => {
      return email.toLowerCase()
    }), ,
  body('password')
    .trim()
    .escape()
    .exists()
    .notEmpty()
    .withMessage('Password is required')
    .bail()
    .isString()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 4 and 20 characters'),
]