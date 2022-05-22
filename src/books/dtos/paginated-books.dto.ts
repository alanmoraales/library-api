import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginatedBooksQueryDto {
  @ApiPropertyOptional({ example: 1, minimum: 1, default: 1 })
  @IsString()
  @IsOptional()
  readonly page: string;

  @ApiPropertyOptional({ example: 6, minimum: 1, default: 10 })
  @IsString()
  @IsOptional()
  readonly limit: string;

  @ApiPropertyOptional({ example: 'harry' })
  @IsString()
  @IsOptional()
  readonly search?: string;
}
