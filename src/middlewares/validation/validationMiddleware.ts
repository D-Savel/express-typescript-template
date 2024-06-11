import { NextFunction, Request, Response } from 'express';
import { ValidationError, validationResult } from 'express-validator';
import { RequestValidationError } from '../../errors/RequestValidationError';


const validate = (validations: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Promise.all(
        validations.map((validation: any) => validation.run(req))
      );
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        next()
      } else {
        throw new RequestValidationError(errors, `request parameter error => ${req.url}`)
      };
    } catch (error) {
      next(error)
    }
  };
}
export default validate;