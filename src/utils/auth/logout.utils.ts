import { logoutType } from '../../@types/auth.d';
import { User } from '../../entity';
import { ApiError } from '../../exceptions/ApiError.exceptions';

export const logout: logoutType = async (refreshToken) => {
  const user = await User.findOneBy({ refreshToken });
  if (!user) {
    throw ApiError.UnauthorizedError;
  }
  user.refreshToken = '';
  await user.save();

  return { msg: 'Logged out successfully' };
};
