export class ApiError extends Error {
  status: number;
  errors: string[];

  constructor(status: number, message: string, errors: string[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static ValidationError(message: string, errors: string[] = []) {
    return new ApiError(400, `Failed to validate field ${message}`, errors);
  }

  static UnauthorizedError(errors: string[] = []) {
    return new ApiError(401, `Access denied, unauthorized request`, errors);
  }

  static BadRequestError(errors: string[] = []) {
    return new ApiError(400, 'Wrong user input, bad request', errors);
  }
}
