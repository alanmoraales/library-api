import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Libros encontrados',
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  async getBooks() {
    // TODO implement pagination
    return await this.booksService.getAllBooks();
  }
}
