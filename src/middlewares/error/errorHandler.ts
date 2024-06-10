import { Request, Response, NextFunction } from "express";
import { CustomError } from "../../utils/errors/CustomError"
import winstonLogger from "../../config/winston/winston";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error && error instanceof CustomError) {
    winstonLogger.error(error.message);
    return res.status(error.statusCode).send({ response: false, statusCodeError: error.statusCode, errors: error.formatErrors() });
  }
  if (error && error instanceof Error) {
    winstonLogger.error(error.message);
    return res.status(500).send({ [error.name]: [{ message: error.message }] });
  }
};