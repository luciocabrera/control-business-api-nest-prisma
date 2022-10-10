import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateCustomerAddressDto } from './create-customer-address.dto';
import { CustomerDto } from './customer.dto';

export class CreateCustomerDto extends OmitType(CustomerDto, [
  'customerId',
  'addresses',
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
