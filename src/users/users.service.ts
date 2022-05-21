import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';
import { ICreateUser } from './interfaces';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async isRegisteredEmail(email: string) {
    const foundUsers = await this.usersRepo.find({ email });
    return Boolean(foundUsers.length);
  }

  async createAndSaveUser(userPayload: ICreateUser) {
    const user = this.usersRepo.create(userPayload);
    return await this.usersRepo.save(user);
  }
}
