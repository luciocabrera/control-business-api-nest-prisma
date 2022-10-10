import { Expose, Type } from 'class-transformer';
import { ApiProperty, OmitType } from '@nestjs/swagger';

import { InvoiceDto } from './invoice.dto';
import { CreateInvoiceDetailDto } from './create-invoice-detail.dto';

export class CreateInvoiceDto extends OmitType(InvoiceDto, [
  'invoiceId',
  'invoicesDetails',
  'customer',
  'createdAt',
  'createdBy',
  'updatedAt',
  'updatedBy'
]) {
  @ApiProperty({
    description: 'Details of the invoice',
    type: CreateInvoiceDetailDto
  })
  @Type(() => CreateInvoiceDetailDto)
  @Expose()
  invoicesDetails: CreateInvoiceDetailDto[];
}
