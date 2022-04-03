import { registerType } from '../../@types/auth.d';
import { User } from '../../entity';
import { v4 } from 'uuid';
import { sendMail } from '../mail/sendMail.utils';
import { generateTokens } from '../token/generateTokens.utils';
import { UserDTO } from '../../dtos/User.dto';
import { registerToken } from '../token/registerToken.utils';
import { hash } from 'bcrypt';
import { ApiError } from '../../exceptions/ApiError.exceptions';

export const register: registerType = async (email, password) => {
  if (await User.findOneBy({ email })) {
    throw ApiError.BadRequestError();
  }
  const activationLink = v4();
  const hashedPassword = await hash(password, 10);
  const user = await User.create({
    email,
    password: hashedPassword,
    activationLink,
  }).save();

  const { ...userDTO } = new UserDTO(user);

  const { activeToken, refreshToken } = generateTokens(userDTO);
  await registerToken(refreshToken, userDTO.id);

  const emailLink = `${process.env.API_URL}/api/email/${activationLink}`;
  await sendMail(email, emailLink);

  return { activeToken, refreshToken, user: userDTO };
};
