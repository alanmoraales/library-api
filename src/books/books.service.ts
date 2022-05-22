import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private booksRepo: Repository<Book>) {}

  async getAllBooks() {
    return await this.booksRepo.find();
  }

  async findOneById(bookId: number) {
    return await this.booksRepo.findOne(bookId);
  }

  async saveBook(book: Book) {
    return await this.booksRepo.save(book);
  }
}
