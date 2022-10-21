import { ApiHideProperty, ApiProperty, OmitType } from '@nestjs/swagger';
import { Prisma, products } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import { MaxLength } from 'class-validator';
import { ProductDto } from 'src/products/dto/product.dto';

export class InvoiceDetailProductDto extends OmitType(ProductDto, [
  'nameWithCode',
  'createdAt',
  'createdBy',
  'updatedAt',
  'updatedBy'
]) {
  // @Expose()
  // @ApiProperty({
  //   example: 'UREN: Cleaning Service',
  //   description: 'Is the Cname of the product with its code'
  // })
  // get nameWithCode() {
  //   return `${this.code}: ${this.name}`;
  // }
}
