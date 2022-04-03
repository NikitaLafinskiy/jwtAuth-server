import { loginType } from '../../@types/auth.d';
import { User } from '../../entity';
import { ApiError } from '../../exceptions/ApiError.exceptions';
import { compare } from 'bcrypt';
import { generateTokens } from '../token/generateTokens.utils';
import { UserDTO } from '../../dtos/User.dto';
import { registerToken } from '../token/registerToken.utils';

export const login: loginType = async (email, password) => {
  const user = await User.findOneBy({ email });
  if (!user) {
    throw ApiError.BadRequestError;
  }

  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    throw ApiError.UnauthorizedError;
  }

  const { ...userDTO } = new UserDTO(user);
  const { activeToken, refreshToken } = await generateTokens(userDTO);

  await registerToken(refreshToken, userDTO.id);

  return { activeToken, refreshToken };
};
