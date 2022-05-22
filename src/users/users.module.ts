import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities';
import { Cart, CartItem } from 'carts/entities';
import { BooksModule } from 'books';

@Module({
  imports: [TypeOrmModule.forFeature([User, Cart, CartItem]), BooksModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
