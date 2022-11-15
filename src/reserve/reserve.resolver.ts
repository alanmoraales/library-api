import { Request as ExpressRequest } from 'express';
import { Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { MailerService } from 'mailer';
import { UsersService } from 'users';
import { ReserveService } from './reserve.service';
import { Reserve } from './entities';
import { UseGuards } from '@nestjs/common';
import { JwtGraphQLGuard } from 'auth/guards';
import * as QRCode from 'qrcode';
import { User } from 'users/entities';

@Resolver()
export class ReserveResolver {
  constructor(
    private userService: UsersService,
    private reserveService: ReserveService,
    private mailerService: MailerService,
  ) {}

  @Mutation(() => Reserve)
  @UseGuards(JwtGraphQLGuard)
  async createReserve(@Context('req') req: ExpressRequest) {
    const user = req.user as User;
    const userCart = await this.userService.findUserCart(user.id);
    const reserve = await this.reserveService.createAndSaveReserve(
      user,
      userCart.items,
    );
    userCart.items = [];
    await this.userService.saveUserCart(userCart);
    const qrCode = await QRCode.toDataURL(`${reserve.id}`);
    await this.mailerService.sendReservationEmail(
      user.email,
      user.name,
      qrCode,
    );
    return reserve;
  }

  @Query(() => [Reserve])
  @UseGuards(JwtGraphQLGuard)
  async reserves(@Context('req') req: ExpressRequest) {
    const user = req.user as User;
    return await this.reserveService.findReservesByUser(user);
  }
}
