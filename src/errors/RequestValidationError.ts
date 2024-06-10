import { ValidationError } from 'express-validator';
import { CustomError } from '../utils/errors/CustomError';

export class RequestValidationError extends CustomError {
  statusCode = 422;
  reason = 'Error route not found';

  constructor(public errors: any, errorDetail: string) {
    super('Request parameters validation Error', errorDetail);
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  };

  formatErrors() {
    return [{ message: this.errors }];
  }
}