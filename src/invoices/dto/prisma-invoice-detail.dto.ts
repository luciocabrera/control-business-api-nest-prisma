import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Expose } from 'class-transformer';
import { InvoiceDetailDto } from './invoice-detail.dto';

export class PrismaInvoiceDetailDto extends OmitType(InvoiceDetailDto, [
  'quantity',
  'priceUnit',
  'priceQuantity',
  'product',
  'productNameWithCode'
]) {
  @Expose()
  @ApiProperty({
    example: '1.5',
    description: 'The quantity as a number'
  })
  quantity: Prisma.Decimal;

  @Expose()
  @ApiProperty({
    example: '10',
    description: 'price per unit'
  })
  priceUnit: Prisma.Decimal;

  @Expose()
  @ApiProperty({
    example: '10',
    description: 'price per quantity'
  })
  priceQuantity: Prisma.Decimal;
}
