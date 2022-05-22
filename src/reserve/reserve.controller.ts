import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'users';
import { User } from 'users/entities';
import { JwtAuthGuard } from 'auth/guards';
import { Request as ExpressRequest } from 'express';
import { ReserveService } from './reserve.service';
import * as QRCode from 'qrcode';

@ApiTags('Reserve')
@Controller('reserves')
export class ReserveController {
  constructor(
    private userService: UsersService,
    private reserveService: ReserveService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createReserve(@Request() req: ExpressRequest) {
    const user = req.user as User;
    const userCart = await this.userService.findUserCart(user.id);
    const reserve = await this.reserveService.createAndSaveReserve(
      user,
      userCart.items,
    );
    userCart.items = [];
    await this.userService.saveUserCart(userCart);
    const qrCode = await QRCode.toString(`${reserve.id}`, { type: 'terminal' });
    console.log(qrCode);
    return reserve;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserReserves(@Request() req: ExpressRequest) {
    const user = req.user as User;
    return await this.reserveService.findReservesByUser(user);
  }
}
