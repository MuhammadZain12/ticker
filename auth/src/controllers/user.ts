import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/errors";

export const signup = (req: Request, res: Response,next:NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new RequestValidationError(errors.array()))
  }
  res.send("Hello World");
};

export const currentUser = (req: Request, res: Response) => {
  res.send("Hello World");
};
