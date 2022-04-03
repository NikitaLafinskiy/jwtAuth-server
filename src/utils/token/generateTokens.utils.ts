import { sign, Secret } from 'jsonwebtoken';
import { User } from '../../@types/user';
import { generateTokensType } from '../../@types/token.d';

export const generateTokens: generateTokensType = (userPayload) => {
  const refreshToken = sign(
    userPayload,
    process.env.JWT_REFRESH_SECRET as Secret,
    {
      expiresIn: '30d',
    }
  );
  const activeToken = sign(
    userPayload,
    process.env.JWT_ACTIVE_SECRET as Secret,
    {
      expiresIn: '5m',
    }
  );

  return { refreshToken, activeToken };
};
