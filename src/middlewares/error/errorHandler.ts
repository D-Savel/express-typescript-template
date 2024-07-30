import { Request, Response, NextFunction } from "express";
import { CustomError } from "../../utils/errors/CustomError";
import winstonLogger from "../../config/winston/winston";
import { sendError } from "../../utils/express/sendError";
import { RequestValidationError } from "../../errors/RequestValidationError";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error && error instanceof CustomError) {
    winstonLogger.error(error instanceof RequestValidationError ? `${error.errorDetail}\n${JSON.stringify(error.formatErrors())}` : `${error} => ${error.errorDetail}`);
    return sendError(res, error.statusCode, error instanceof RequestValidationError ? 'Bad Request : Bad body or path parameters for request' : error.message, error instanceof RequestValidationError ? error.formatErrors() : error.errorDetail || 'none');
  }
  if (error && error instanceof Error) {
    winstonLogger.error(`Node server error \n ${error.stack!}`);
    return sendError(res, 500, `Node server error`, `  Node error \n ${error.stack!}`);
  }
};