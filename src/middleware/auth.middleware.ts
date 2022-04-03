import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../exceptions/ApiError.exceptions';
import { validateActiveToken } from '../utils/token/validateActiveToken.utils';

export const authValidate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorizationHeader = req.headers.authorization as string;
    if (!authorizationHeader) {
      throw ApiError.UnauthorizedError();
    }
    const token = authorizationHeader.split('Bearer ')[1];
    console.log(token);
    const { ...data } = validateActiveToken(token);
    if (!data) {
      throw ApiError.UnauthorizedError();
    }
    next();
  } catch (err) {
    next(ApiError.UnauthorizedError());
  }
};
