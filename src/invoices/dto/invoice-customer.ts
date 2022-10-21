import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { documentTypes, titles } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
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

  @IsString()
  @Expose()
  @ApiProperty({
    example: 'LC Lucio Cabrera',
    description: 'Is the Customer full name including the initials'
  })
  get fullNameWithInitials() {
    let fullName = this.initials
      ? `${this.initials} ${this.firstName}`
      : this.firstName;
    return this.lastName ? `${fullName} ${this.lastName}` : fullName;
  }
}
