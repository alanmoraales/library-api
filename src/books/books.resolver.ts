import { Query, Resolver, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities';
import { PaginatedBooksResponse } from './interfaces';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => [Book])
  async allBooks() {
    return this.booksService.getAllBooks();
  }

  @Query(() => PaginatedBooksResponse)
  async paginatedBooks(
    @Args('page') page?: number,
    @Args('limit') limit?: number,
    @Args('search') search?: string,
  ) {
    return this.booksService.searchPaginatedBooks({
      page: String(page),
      limit: String(limit),
      search,
    });
  }
}
