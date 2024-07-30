import { CustomError } from '../utils/errors/CustomError';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  reason = 'Bad Request :parameters validation Error';

  constructor(public errors: any, errorDetail: string) {
    super('Request parameters validation Error', errorDetail);
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  };

  formatErrors() {
    return this.errors;
  }
}