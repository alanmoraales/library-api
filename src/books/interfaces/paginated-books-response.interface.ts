import { ApiProperty } from '@nestjs/swagger';
import { IBookResponse } from './book-response.interface';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Book } from 'books/entities';

@ObjectType()
class PaginationMeta {
  @Field(() => Int)
  totalItems: number;
  @Field(() => Int)
  itemCount: number;
  @Field(() => Int)
  itemsPerPage: number;
  @Field(() => Int)
  totalPages: number;
  @Field(() => Int)
  currentPage: number;
}

export interface IPaginatedBooksResponse {
  items: IBookResponse[];
  meta: PaginationMeta;
}

@ObjectType()
export class PaginatedBooksResponse implements IPaginatedBooksResponse {
  @ApiProperty({
    example: [
      {
        id: 1,
        title: 'Harry Potter',
        imageUrl: 'https://images/harry-potter.png',
        description: 'Un libro de magos',
        availableQuantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    isArray: true,
  })
  @Field(() => [Book])
  items: IBookResponse[];

  @ApiProperty({
    example: {
      totalItems: 50,
      itemCount: 10,
      itemsPerPage: 10,
      totalPages: 5,
      currentPage: 1,
    },
  })
  @Field(() => PaginationMeta)
  meta: PaginationMeta;
}
