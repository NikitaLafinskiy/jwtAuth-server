import { Request, Response, NextFunction } from 'express';
import { login } from '../../utils/auth/login.utils';
import { authValidator } from '../../validators/auth.validator';
import { ApiError } from '../../exceptions/ApiError.exceptions';

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const isValidUser = authValidator.validate(req.body);
    console.log(isValidUser);
    if (!isValidUser) {
      throw ApiError.UnauthorizedError();
    }
    const { activeToken, refreshToken } = await login(email, password);
    res.cookie('refreshToken', refreshToken, {
      maxAge: 24 * 60 * 60 * 1000 * 30,
    });
    res.json({ activeToken, refreshToken });
  } catch (err) {
    next(err);
  }
};
