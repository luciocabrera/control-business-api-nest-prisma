import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Prisma, products } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import { MaxLength } from 'class-validator';
import { ProductDto } from 'src/products/dto/product.dto';
import { InvoiceDetailProductDto } from './invoice-detail-product.dto';

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
  product: ProductDto; // InvoiceDetailProductDto;

  // @Expose()
  // @ApiProperty({
  //   example: 'Cleaning Service',
  //   description: 'The product description'
  // })
  // get productDescription() {
  //   return this.product?.description;
  // }
  // @Expose()
  // @ApiProperty({
  //   example: 'Cleaning Service',
  //   description: 'The product description'
  // })
  // get productPrice() {
  //   return this.product?.price;
  // }

  @Expose()
  @ApiProperty({
    example: '1.5',
    description: 'The quantity as a number'
  })
  quantity: number;

  @Expose()
  @MaxLength(160)
  @ApiProperty({
    example: 'Cleaning service carried out on 26/01/2022',
    description: 'The Description of the details'
  })
  description: string;

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
