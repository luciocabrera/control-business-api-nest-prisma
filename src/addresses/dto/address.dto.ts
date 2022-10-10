import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class AddressDto {
  /**
   * The internal autogenerated id
   * @example 1
   */
  @Expose()
  @ApiProperty({
    description: 'The internal autogenerated id of the address'
  })
  addressId: number;

  // @Expose()
  @Exclude()
  @ApiHideProperty()
  @ApiProperty({
    description: 'The internal autogenerated id of the customer'
  })
  customerId: number;

  @IsString()
  @IsNotEmpty()
  @Expose()
  @MaxLength(80)
  @ApiProperty({
    example: 'Netherlands',
    description: 'The country name'
  })
  country: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  @MaxLength(80)
  @ApiProperty({
    example: 'Province South',
    description: 'The state/province name'
  })
  state: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  @MaxLength(80)
  @ApiProperty({
    example: 'Rijswijk',
    description: 'The city name'
  })
  city: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  @MaxLength(80)
  @ApiProperty({
    example: 'Sr Winston Churchillian',
    description: 'The Address line 1'
  })
  line1: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Expose()
  @MaxLength(80)
  @ApiProperty({
    example: '201',
    description: 'The Address line 1'
  })
  line2: string = '';

  @IsString()
  @IsNotEmpty()
  @Expose()
  @MaxLength(16)
  @ApiProperty({
    example: '2282 JR',
    description: 'ZIP code / Postal code'
  })
  postalCode: string;
}