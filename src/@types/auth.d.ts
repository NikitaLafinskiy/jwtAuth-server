import { UserDTO } from '../dtos/User.dto';

export type registerType = (
  email: string,
  password: string
) => Promise<{ activeToken: string; refreshToken: string; user: UserDTO }>;

export type logoutType = (refreshToken: string) => Promise<{ msg: string }>;

export type loginType = (
  email: string,
  password: string
) => Promise<{ activeToken: string; refreshToken: string }>;

export type refreshType = (
  refreshToken
) => Promise<{ activeToken: string; msg: string; user: UserDTO }>;

export type getUserType = (
  id: number
) => Promise<{ user: UserDTO; msg: string }>;
