import { Request, Response, NextFunction } from "express";
import {
  RequestValidationError,
  DataBaseConnectionError,
} from "../utils/errors";
import { FieldValidationError } from "express-validator";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log("Handling this error as a request validation error");
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  } else if (err instanceof DataBaseConnectionError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(500).send({
    errors: [{ message: "Something went wrong" }],
  });
};
