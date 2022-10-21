import { OmitType } from '@nestjs/swagger';

import { InvoiceDetailDto } from './invoice-detail.dto';

export class CreateInvoiceDetailDto extends OmitType(InvoiceDetailDto, [
  'product'
  // 'productNameWithCode',
  // 'productDescription',
  // 'productPrice'
]) {}
