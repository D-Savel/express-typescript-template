import { Request, Response, NextFunction } from "express"

export const sendSuccess = async (res: Response, codeStatus: number, message: string, data: Object[]) => {
  res.status(codeStatus).send({ status: 'success', message, data, errors: 'null' })
};
