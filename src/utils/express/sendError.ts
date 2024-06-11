import { Request, Response, NextFunction } from "express"

export const sendError = async (res: Response, codeStatus: number, message: any, errorDetail: string) => {
  res.status(codeStatus).send({ status: 'error', message, data: null, error_detail: errorDetail })
};