import { ValidationError } from "express-validator";

export interface RequestValidationType {
  title: ValidationError;
  detail: any;
  code: number;
}[]