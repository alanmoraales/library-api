import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'auth/guards';
import { Request as ExpressRequest } from 'express';
import { User } from './entities';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Request() req: ExpressRequest) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('cart')
  async getUserCart(@Request() req: ExpressRequest) {
    const user = req.user as User;
    const userCart = await this.userService.findUserCart(user.id);
    return userCart;
  }
}
