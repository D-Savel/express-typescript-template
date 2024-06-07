
import path from "path";
import {
  CustomError

} from "../utils/errors/CustomError";
export class DatabaseError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';
  constructor() {
    super('Database Error');
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
  formatErrors() {
    return [{ message: this.reason }];
  }
}