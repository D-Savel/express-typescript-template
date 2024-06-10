import { ValidationError } from 'express-validator';
import { CustomError } from '../utils/errors/CustomError';

export class RequestValidationError extends CustomError {
  statusCode = 422;
  reason = 'Error route not found';

  constructor(public errors: any) {
    super('Request parameters validation Error');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  };

  formatErrors() {
    return [{ message: this.errors }];
  }
}




// Original code with ValidationError[] type in constructorfor new RequestValidationError instantiation

// import { ValidationError } from 'express-validator';
// import { CustomError } from './custom-error';
// export class RequestValidationError extends CustomError {
//   statusCode = 400;
// constructor(public errors: ValidationError[]) {
//     super();
//     Object.setPrototypeOf(this, RequestValidationError.prototype);
//   }
// formatErrors() {
//     return this.errors.map((err) => {
//       return { message: err.msg, field: err.param };
//     });
//   }
// }