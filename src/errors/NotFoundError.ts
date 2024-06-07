import { CustomError } from "../utils/errors/CustomError";

export class NotFoundError extends CustomError {
  statusCode = 404;
  reason = 'Error route not found';

  constructor() {
    super('Route Not Found');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  formatErrors() {
    return [{ message: this.reason }];
  }
}