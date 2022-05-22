import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Book } from '../../books/entities/book.entity';
import books from '../data/books.data';

export default class CreateBooks implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Book)
      .values(books)
      .execute();
  }
}
