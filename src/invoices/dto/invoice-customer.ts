import { OmitType } from '@nestjs/swagger';
import { documentTypes, titles } from '@prisma/client';
import { Expose } from 'class-transformer';
import { CustomerDto } from 'src/customers/dto/customer.dto';

export class InvoiceCustomerDto extends OmitType(CustomerDto, [
  'documentType',
  'title',
  'customerId',
  'addresses',
  'documentTypeId',
  'currentAddress',
  'titleId',
  'createdAt',
  'createdBy',
  'updatedAt',
  'updatedBy'
]) {
  @Expose()
  documentType: documentTypes;

  @Expose()
  title: titles;
}
