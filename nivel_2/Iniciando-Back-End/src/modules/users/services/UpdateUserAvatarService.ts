import { getRepository } from 'typeorm';

import User from '../entities/User';
import uploadConfig from '../../../config/upload';

import fs from 'fs';
import path from 'path';
import AppError from '../../../shared/Errors/AppError';

interface Request {
  user_id: string;
  avatarFilename: string;
}

export default class UpdateUserAvatarService {
  public async execute({ avatarFilename, user_id }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  }
}
