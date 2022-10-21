import { OmitType, ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Expose } from 'class-transformer';
import { ProductDto } from './product.dto';

export class PrismaProductDto extends OmitType(ProductDto, [
  'price',
  'nameWithCode'
]) {
  @Expose()
  @ApiProperty({
    example: '10',
    description: 'price'
  })
  price: Prisma.Decimal;
}
