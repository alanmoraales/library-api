import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart, CartItem } from 'carts/entities';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './entities';
import { ICreateUser } from './interfaces';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    @InjectRepository(Cart) private cartsRepo: Repository<Cart>,
    @InjectRepository(CartItem) private cartItemsRepo: Repository<CartItem>,
  ) {}

  async isRegisteredEmail(email: string) {
    const foundUsers = await this.usersRepo.find({ where: { email } });
    return Boolean(foundUsers.length);
  }

  async createAndSaveUser(userPayload: ICreateUser) {
    const user = this.usersRepo.create(userPayload);
    const userCart = this.cartsRepo.create();
    await this.cartsRepo.save(userCart);
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

  async finOneById(userId: number, options?: FindOneOptions<User>) {
    return await this.usersRepo.findOne(userId, options);
  }

  async findUserCart(userId: number) {
    const user = await this.finOneById(userId, { relations: ['cart'] });
    const userCart = await this.cartsRepo.findOne(user.cart.id, {
      relations: ['items', 'items.book'],
    });
    return userCart;
  }

  async saveCartItem(cartItem: CartItem) {
    return await this.cartItemsRepo.save(cartItem);
  }

  async createAndSaveCartItem({ cart, book, quantity }) {
    const cartItem = this.cartItemsRepo.create({ cart, book, quantity });
    return await this.cartItemsRepo.save(cartItem);
  }

  async removeCartItem(cartItem: CartItem) {
    return await this.cartItemsRepo.remove([cartItem]);
  }

  async saveUserCart(userCart: Cart) {
    return await this.cartsRepo.save(userCart);
  }
}
