import { CustomError } from "../utils/errors/CustomError";

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super('Route not found');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  formatErrors() {
    return [{ message: 'This route does not exist' }];
  }
}