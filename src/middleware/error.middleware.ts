import { Response, Request, NextFunction } from 'express';
import { ApiError } from '../exceptions/ApiError.exceptions';

export const handleErr = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    res.status(err.status).json({ msg: err.message, errors: err.errors });
  } else {
    res.status(500).json({ msg: 'Unknown error', errors: err });
  }
};
