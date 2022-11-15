import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from 'mailer';
import { UsersModule } from 'users';
import { Reserve } from './entities';
import { ReserveController } from './reserve.controller';
import { ReserveResolver } from './reserve.resolver';
import { ReserveService } from './reserve.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reserve]), UsersModule, MailerModule],
  providers: [ReserveService, ReserveResolver],
  controllers: [ReserveController],
})
export class ReserveModule {}
