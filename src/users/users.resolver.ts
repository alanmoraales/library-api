import { UseGuards } from '@nestjs/common';
import { Context, Resolver, Query } from '@nestjs/graphql';
import { JwtGraphQLGuard } from 'auth/guards';
import { Cart } from 'carts/entities';
import { Request as ExpressRequest } from 'express';
import { User } from './entities';
import { UserResponse } from './interfaces';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => UserResponse)
  @UseGuards(JwtGraphQLGuard)
  me(@Context('req') req: ExpressRequest) {
    return req.user;
  }

  @Query(() => Cart)
  @UseGuards(JwtGraphQLGuard)
  async cart(@Context('req') req: ExpressRequest) {
    const user = req.user as User;
    const userCart = await this.userService.findUserCart(user.id);
    return userCart;
  }
}
