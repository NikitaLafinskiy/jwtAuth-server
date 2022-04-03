import { Request, Response, NextFunction } from 'express';
import { emailActivation } from './../../utils/mail/emailActivation.utils';

export const emailActivationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const link = req.params.link;
    await emailActivation(link);
    res.redirect(process.env.CLIENT_URL as string);
  } catch (err) {
    next(err);
  }
};
