import { IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveBookFormCartDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 3 })
  readonly bookId: number;
}
