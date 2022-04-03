import { User } from '../../entity';
import { emailActivationType } from '../../@types/mail.d';
import { UserDTO } from '../../dtos/User.dto';
import { ApiError } from '../../exceptions/ApiError.exceptions';

export const emailActivation: emailActivationType = async (link) => {
  const user = await User.findOneBy({ activationLink: link });
  if (!user) {
    throw ApiError.UnauthorizedError();
  }
  user.isActive = true;
  await user.save();

  const { ...userDTO } = new UserDTO(user);

  return {
    user: userDTO,
    isActive: userDTO.isActive,
    msg: 'Email activated successfully',
  };
};
