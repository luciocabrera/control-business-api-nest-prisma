import { OmitType } from '@nestjs/swagger';
import { ProductDto } from './product.dto';

export class CreateProductDto extends OmitType(ProductDto, [
  'productId',
  'nameWithCode',
  'createdAt',
  'createdBy',
  'updatedAt',
  'updatedBy'
]) {}
