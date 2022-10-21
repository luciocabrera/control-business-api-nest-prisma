import { OmitType } from '@nestjs/swagger';
import { CreateEmailDto } from 'src/emails/dto/create-email.dto';

export class CreateCustomerEmailDto extends OmitType(CreateEmailDto, [
  'customerId'
]) {}
