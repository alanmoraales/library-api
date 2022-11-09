import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Book } from './entities';
import { PaginatedBooksQueryDto } from './dtos';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  async getAllBooks() {
    return await this.booksRepository.find();
  }

  async searchPaginatedBooks({
    page = '1',
    limit = '10',
    search,
  }: PaginatedBooksQueryDto): Promise<Pagination<Book>> {
    const queryBuilder = this.booksRepository
      .createQueryBuilder()
      .select()
      .where('title ILIKE :searchTerm', { searchTerm: `%${search}%` });
    return paginate<Book>(queryBuilder, { page, limit });
  }

  async getPaginatedBooks({
    page = '1',
    limit = '10',
  }: PaginatedBooksQueryDto) {
    return paginate<Book>(this.booksRepository, { page, limit });
  }

  async findOneById(bookId: number) {
    return await this.booksRepository.findOne(bookId);
  }

  async saveBook(book: Book) {
    return await this.booksRepository.save(book);
  }
}
