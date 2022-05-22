import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from 'mailer';
import { UsersModule } from 'users';
import { Reserve } from './entities';
import { ReserveController } from './reserve.controller';
import { ReserveService } from './reserve.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reserve]), UsersModule, MailerModule],
  providers: [ReserveService],
  controllers: [ReserveController],
})
export class ReserveModule {}
