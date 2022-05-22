import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'carts/entities';
import { Repository } from 'typeorm';
import { User } from './entities';
import { ICreateUser } from './interfaces';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    @InjectRepository(Cart) private cartRepo: Repository<Cart>,
  ) {}

  async isRegisteredEmail(email: string) {
    const foundUsers = await this.usersRepo.find({ where: { email } });
    return Boolean(foundUsers.length);
  }

  async createAndSaveUser(userPayload: ICreateUser) {
    const user = this.usersRepo.create(userPayload);
    const userCart = this.cartRepo.create();
    await this.cartRepo.save(userCart);
    user.cart = userCart;
    return await this.usersRepo.save(user);
  }

  async findOneByEmail(email: string) {
    const foundUsers = await this.usersRepo.find({
      where: { email },
      relations: ['cart'],
    });
    return foundUsers[0];
  }
}
