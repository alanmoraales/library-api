import { UseGuards } from '@nestjs/common';
import { Context, Resolver, Query } from '@nestjs/graphql';
import { JwtGraphQLGuard } from 'auth/guards';
import { Request as ExpressRequest } from 'express';
import { UserResponse } from './interfaces';

@Resolver()
export class UsersResolver {
  @Query(() => UserResponse)
  @UseGuards(JwtGraphQLGuard)
  me(@Context('req') req: ExpressRequest) {
    return req.user;
  }
}
