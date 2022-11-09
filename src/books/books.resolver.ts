import { Query, Resolver, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => [Book])
  async books(
    @Args('page') page?: number,
    @Args('limit') limit?: number,
    @Args('search') search?: string,
  ) {
    if (search) {
      return this.booksService.searchPaginatedBooks({
        page: String(page),
        limit: String(limit),
        search,
      });
    }
    if (page) {
      return this.booksService.getPaginatedBooks({
        page: String(page),
        limit: String(limit),
      });
    }
    return this.booksService.getAllBooks();
  }
}
