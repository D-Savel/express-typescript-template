import { Request, Response, NextFunction } from "express";
import { CustomError } from "../../utils/errors/CustomError"
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
    winstonLogger.error(error instanceof RequestValidationError ? `${error.errorDetail}\n${JSON.stringify(error.formatErrors())}` : `${error.errorDetail}`);
    return sendError(res, error.statusCode, error instanceof RequestValidationError ? error.formatErrors() : error.message, [{ content: null }], error.name || 'none');
  }
  if (error && error instanceof Error) {
    winstonLogger.error(error.message);
    return sendError(res, 500, error.message, [{ content: null }], `Node error\n${error.stack!}`);
    return res.status(500).send({ [error.name]: [{ message: error.message }] });
  }
};