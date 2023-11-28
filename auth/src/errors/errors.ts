import { ValidationError, FieldValidationError } from "express-validator";

export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor() {
    super();
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract serializeErrors(): { message: string; field?: string }[];
}

export class RequestValidationError extends CustomError {
  constructor(
    private errors: ValidationError[],
    public statusCode: number = 400
  ) {
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

export class DataBaseConnectionError extends CustomError {
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

export class NotFoundError extends CustomError {
  constructor(public statusCode: number = 404) {
    super();
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not Found" }];
  }
}
