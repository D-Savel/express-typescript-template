import { ValidationError } from 'express-validator';
import { CustomError } from '../utils/errors/CustomError';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super('Request parameters validation Error');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  formatErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.type };
    });
  }
}