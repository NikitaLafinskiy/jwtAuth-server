import { verify, Secret } from 'jsonwebtoken';
import { ApiError } from '../../exceptions/ApiError.exceptions';
import { validateAccesTokenType } from '../../@types/token.d';
import { User } from '../../@types/user';

export const validateActiveToken: validateAccesTokenType = (activeToken) => {
  const user = verify(
    activeToken,
    process.env.JWT_ACTIVE_SECRET as Secret
  ) as User;
  if (!user) {
    throw ApiError.UnauthorizedError();
  }

  return { user, activeToken };
};
