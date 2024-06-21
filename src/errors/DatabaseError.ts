
import path from "path";
import {
  CustomError

} from "../utils/errors/CustomError";
export class DatabaseError extends CustomError {
  statusCode = 204;
  reason = 'Error fetching data to database';
  constructor(ErrorDetail: string) {
    super('Fetching data to database Error', ErrorDetail);
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
  formatErrors() {
    return [{ message: this.reason }];
  }
}