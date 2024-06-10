import { Request, Response, NextFunction } from "express"

export const sendError = async (res: Response, codeStatus: number, message: any, data: Object[], errorDetail: string) => {
  res.status(codeStatus).send({ status: 'error', message, data, error_detail: errorDetail })
};