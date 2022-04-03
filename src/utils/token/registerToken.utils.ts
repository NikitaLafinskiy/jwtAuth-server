import { registerTokenType } from '../../@types/token.d';
import { User } from '../../entity';
import { ApiError } from '../../exceptions/ApiError.exceptions';

export const registerToken: registerTokenType = async (
  refreshToken,
  userID
) => {
  const user = await User.findOneBy({ id: userID });
  if (!user) {
    throw ApiError.BadRequestError;
  }
  user.refreshToken = refreshToken;
  await user.save();

  return {
    msg: `The refresh token is updated successfully`,
    user,
    refreshToken,
  };
};
