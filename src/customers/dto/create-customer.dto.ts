import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';

import { CreateCustomerPhoneDto } from './create-customer-address.dto';
import { CreateCustomerAddressDto } from './create-customer-phone.dto';
import { CustomerDto } from './customer.dto';

export class CreateCustomerDto extends OmitType(CustomerDto, [
  'customerId',
  'addresses',
  'phones',
  'documentType',
  'documentTypeId',
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
