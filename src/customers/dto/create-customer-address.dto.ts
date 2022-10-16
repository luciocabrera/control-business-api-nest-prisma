import { OmitType } from '@nestjs/swagger';
import { CreatePhoneDto } from 'src/phones/dto/create-phone.dto';

export class CreateCustomerPhoneDto extends OmitType(CreatePhoneDto, [
  'customerId'
]) {}
