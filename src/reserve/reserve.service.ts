import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from 'carts/entities';
import { Repository } from 'typeorm';
import { User } from 'users/entities';
import { Reserve } from './entities';

@Injectable()
export class ReserveService {
  constructor(
    @InjectRepository(Reserve) private reservesRepo: Repository<Reserve>,
  ) {}

  async createAndSaveReserve(user: User, cartItems: CartItem[]) {
    const reserve = this.reservesRepo.create({ user, items: cartItems });
    await this.reservesRepo.save(reserve);
    return await this.reservesRepo.findOne(reserve.id, {
      relations: ['items', 'items.book'],
    });
  }

  async findReservesByUser(user: User) {
    const foundReserves = await this.reservesRepo.find({
      where: { user: { id: user.id } },
      relations: ['items', 'items.book'],
    });
    return foundReserves;
  }
}
