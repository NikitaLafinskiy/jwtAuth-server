import { Request, Response, NextFunction } from 'express';
import { register } from '../../utils/auth/register.utils';
import { authValidator } from '../../validators/auth.validator';
import { ApiError } from '../../exceptions/ApiError.exceptions';

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const isValidUser = await authValidator.validate(req.body);
    if (!isValidUser) {
      throw ApiError.ValidationError('Wrong user input');
    }
    const { ...data } = await register(email, password);
    res.cookie('refreshToken', data.refreshToken, {
      maxAge: 24 * 60 * 60 * 1000 * 30,
    });
    if (data) {
      res.status(200).json({ ...data });
    }
  } catch (err) {
    next(err);
  }
};
