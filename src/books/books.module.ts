import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { Book } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService, BooksResolver],
  controllers: [BooksController],
  exports: [BooksService],
})
export class BooksModule {}
