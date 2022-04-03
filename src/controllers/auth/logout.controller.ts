import { Request, Response, NextFunction } from 'express';
import { logout } from '../../utils/auth/logout.utils';

export const logoutController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.cookies;
    const { ...data } = logout(refreshToken);
    res.clearCookie('refreshToken');
    res.json({ ...data });
  } catch (err) {
    next(err);
  }
};
