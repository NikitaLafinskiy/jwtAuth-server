import { ApiError } from '../../exceptions/ApiError.exceptions';
import { User } from '../../entity';
import { refreshToken as refreshTokenFunc } from '../token/refreshToken.utils';
import { refreshType } from '../../@types/auth.d';

export const refresh: refreshType = async (refreshToken) => {
  const user = await User.findOneBy({ refreshToken });
  if (!user) {
    throw ApiError.UnauthorizedError;
  }
  const { activeToken } = refreshTokenFunc(refreshToken, user);

  return { activeToken, msg: 'Active token refreshed successfully', user };
};
