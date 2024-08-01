import { CustomError } from '../utils/errors/CustomError';
import { Result, ValidationError } from 'express-validator';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  reason = 'Bad Request :parameters validation Error';

  constructor(errorDetail: string, public errors?: any) {
    super('Request parameters validation', errorDetail);
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  };

  formatErrors() {
    return this.errors;
  }
}