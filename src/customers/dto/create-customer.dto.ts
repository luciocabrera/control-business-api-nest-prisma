import { Exclude, Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiHideProperty, ApiProperty, OmitType } from '@nestjs/swagger';

import { CreateCustomerPhoneDto } from './create-customer-phone.dto';
import { CreateCustomerEmailDto } from './create-customer-email.dto';
import { CreateCustomerAddressDto } from './create-customer-address.dto';
import { CustomerDto } from './customer.dto';

export class CreateCustomerDto extends OmitType(CustomerDto, [
  'customerId',
  'addresses',
  'phones',
  'emails',
  'documentType',
  'documentTypeId',
  'fullNameWithInitials',
  'title',
  'titleId',
  'createdAt',
  'createdBy',
  'updatedAt',
  'updatedBy'
]) {
  @ApiProperty({
    description: 'Addresses of the customer',
    type: CreateCustomerAddressDto
  })
  @Type(() => CreateCustomerAddressDto)
  @Expose()
  addresses: CreateCustomerAddressDto[];

  @ApiProperty({
    description: 'Phone numbers of the customer',
    type: CreateCustomerPhoneDto
  })
  @Type(() => CreateCustomerPhoneDto)
  @Expose()
  phones: CreateCustomerPhoneDto[];

  @ApiProperty({
    description: 'Emails of the customer',
    type: CreateCustomerEmailDto
  })
  @Type(() => CreateCustomerEmailDto)
  @Expose()
  emails: CreateCustomerEmailDto[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Expose()
  @MaxLength(36)
  documentTypeName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Expose()
  @MaxLength(24)
  titleName: string;
}
