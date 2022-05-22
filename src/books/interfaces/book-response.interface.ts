import { ApiProperty } from '@nestjs/swagger';

export interface IBookResponse {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  availableQuantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export class BookResponse implements IBookResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Harry Potter' })
  title: string;

  @ApiProperty({ example: 'https://images/harry-potter.png' })
  imageUrl: string;

  @ApiProperty({ example: 'Un libro de magos' })
  description: string;

  @ApiProperty({ example: 5 })
  availableQuantity: number;

  @ApiProperty({ example: new Date() })
  createdAt: Date;

  @ApiProperty({ example: new Date() })
  updatedAt: Date;
}
