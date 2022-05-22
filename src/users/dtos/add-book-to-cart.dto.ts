import { IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddBookToCartDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 3 })
  readonly bookId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  readonly quantity: number;
}
