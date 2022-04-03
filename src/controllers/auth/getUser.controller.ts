import { Request, Response, NextFunction } from 'express';
import { getUser } from '../../utils/auth/getUser.utils';

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const { ...data } = await getUser(parseInt(id));

    res.json({ ...data });
  } catch (err) {
    next(err);
  }
};
