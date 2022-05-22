import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { BooksService } from './books.service';
import { PaginatedBooksQueryDto } from './dtos';
import { Book } from './entities';
import { BookResponse, PaginatedBooksResponse } from './interfaces';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(
    private booksService: BooksService,
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Libros encontrados',
    type: PaginatedBooksResponse,
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  async getPaginatedBooks(
    @Query() { page = '1', limit = '10' }: PaginatedBooksQueryDto,
  ): Promise<Pagination<Book>> {
    return paginate<Book>(this.booksRepository, { page, limit });
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Libros encontrados',
    isArray: true,
    type: BookResponse,
  })
  @Get('all')
  @HttpCode(HttpStatus.OK)
  async getAllBooks() {
    return await this.booksService.getAllBooks();
  }
}
