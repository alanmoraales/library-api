import { Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => [Book])
  async books() {
    return this.booksService.getAllBooks();
  }
}
