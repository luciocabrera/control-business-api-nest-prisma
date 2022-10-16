import { OmitType } from '@nestjs/swagger';

import { PhoneDto } from './phone.dto';

export class CreatePhoneDto extends OmitType(PhoneDto, ['phoneId']) {}
