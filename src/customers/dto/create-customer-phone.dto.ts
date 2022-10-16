import { OmitType } from '@nestjs/swagger';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';

export class CreateCustomerAddressDto extends OmitType(CreateAddressDto, [
  'customerId'
]) {}
