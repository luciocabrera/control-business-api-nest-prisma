import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { products } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';

export class InvoiceDetailDto {
  @Exclude()
  @ApiHideProperty()
  invoiceId: number;

  @Expose()
  @ApiProperty({
    example: '1',
    description: 'The product Id'
  })
  productId: number;

  @Expose()
  @ApiProperty({
    example: "{code:'ER', name:''}",
    description: 'The product name and code'
  })
  product: Pick<products, 'code' | 'name'>;

  @Expose()
  @ApiProperty({
    example: '1.5',
    description: 'The quantity as a number'
  })
  quantity: number;

  @Expose()
  @ApiProperty({
    example: '10',
    description: 'price per unit'
  })
  priceUnit: number;

  @Expose()
  @ApiProperty({
    example: '10',
    description: 'price per quantity'
  })
  priceQuantity: number;
}
