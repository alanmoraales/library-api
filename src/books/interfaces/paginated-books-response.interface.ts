import { ApiProperty } from '@nestjs/swagger';
import { IBookResponse } from './book-response.interface';

interface IPaginationMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface IPaginatedBooksResponse {
  items: IBookResponse[];
  meta: IPaginationMeta;
}

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
  meta: IPaginationMeta;
}
