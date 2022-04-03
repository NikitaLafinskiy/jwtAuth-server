import { Secret, verify } from 'jsonwebtoken';
import { ApiError } from '../../exceptions/ApiError.exceptions';
import { generateTokens } from './generateTokens.utils';
import { refreshTokenType } from '../../@types/token.d';
import { UserDTO } from '../../dtos/User.dto';

export const refreshToken: refreshTokenType = (refreshToken, user) => {
  const isValid = verify(
    refreshToken,
    process.env.JWT_REFRESH_SECRET as Secret
  );
  if (!isValid) {
    throw new ApiError(401, 'Refresh token, expired, login again');
  }

  const { ...userDTO } = new UserDTO(user);

  const { activeToken } = generateTokens(userDTO);

  return { activeToken };
};
