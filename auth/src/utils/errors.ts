import { ValidationError, FieldValidationError } from "express-validator";

export class RequestValidationError extends Error {
  constructor(private errors: ValidationError[],public statusCode: number = 400) {
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      const newError = error as FieldValidationError;
      return { message: newError.msg, field: newError.path };
    });
  }
}

export class DataBaseConnectionError extends Error {
  reason = "Error While Connecting to Database";
  public statusCode = 500;
  constructor() {
    super();
    Object.setPrototypeOf(this, DataBaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
