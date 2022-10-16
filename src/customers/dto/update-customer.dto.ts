import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateCustomerPhoneDto } from './create-customer-address.dto';
import { CreateCustomerAddressDto } from './create-customer-phone.dto';
import { CustomerDto } from './customer.dto';

export class UpdateCustomerDto extends OmitType(CustomerDto, [
  'addresses',
  'phones',
  'currentAddress',
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
  documentTypeName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Expose()
  titleName: string;
}
