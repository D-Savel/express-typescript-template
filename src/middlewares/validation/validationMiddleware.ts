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
        const response = errors.array().map((error) => {
          return {
            title: error,
            detail: error.msg,
            code: 422,
          };
        })
        res.status(422).send(response)
        throw new RequestValidationError(response as any)
      };
    } catch (error) {
      next(error)
    }
  };
}
export default validate;