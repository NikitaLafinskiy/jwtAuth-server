import { User } from '../../entity';
import { UserDTO } from '../../dtos/User.dto';
import { ApiError } from '../../exceptions/ApiError.exceptions';
import { getUserType } from '../../@types/auth.d';

export const getUser: getUserType = async (id) => {
  const user = await User.findOneBy({ id });
  if (!user) {
    throw ApiError.BadRequestError();
  }
  console.log('User found');
  const { ...userDTO } = new UserDTO(user);

  return { user: userDTO, msg: 'User found' };
};
