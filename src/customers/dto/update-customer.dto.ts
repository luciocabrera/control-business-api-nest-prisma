import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateCustomerAddressDto } from './create-customer-address.dto';
import { CustomerDto } from './customer.dto';

export class UpdateCustomerDto extends OmitType(CustomerDto, [
  'addresses',
  'currentAddress',
  'documentType',
  'documentId',
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
