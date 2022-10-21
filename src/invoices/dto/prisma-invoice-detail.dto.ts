import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Expose } from 'class-transformer';
import { InvoiceDetailDto } from './invoice-detail.dto';

// const invoiceDetailWithProduct = Prisma.validator<Prisma.invoicesDetailsArgs>()(
//   {
//     include: { product: true }
//   }
// );

// type InvoiceDetailWithProduct = Prisma.invoicesDetailsGetPayload<
//   typeof invoiceDetailWithProduct
// >;

export class PrismaInvoiceDetailDto extends OmitType(InvoiceDetailDto, [
  'quantity',
  'priceUnit',
  'priceQuantity',
  'product'
  // 'productNameWithCode',
  //  'productDescription',
  // 'productPrice'
]) {
  // implements InvoiceDetailWithProduct
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
