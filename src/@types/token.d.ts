import { User } from './user';
import { JwtPayload } from 'jsonwebtoken';

export type registerTokenType = (
  refreshToken: string,
  userID: number
) => Promise<{ msg: string; user: User; refreshToken: string }>;

export type generateTokensType = (userPayload: User) => {
  refreshToken: string;
  activeToken: string;
};

export type refreshTokenType = (
  refreshToken: string,
  user: User
) => { activeToken: string };

export type validateAccesTokenType = (activeToken: string) => {
  activeToken: string;
  user: User;
};

export type validateRefreshTokenType = (refreshToken: string) => {
  activeToken: string;
  user: User;
};
