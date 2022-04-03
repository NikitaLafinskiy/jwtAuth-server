import { Request, Response, NextFunction } from 'express';
import { refresh } from '../../utils/auth/refresh.utils';

export const refreshController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('called REFRESH ');
    const { refreshToken } = req.cookies;
    console.log('REFRESH TOKEN');
    const { ...data } = await refresh(refreshToken);
    console.log(data);
    console.log('NEW DATA SENT');
    res.json({ ...data });
  } catch (err) {
    next(err);
  }
};
