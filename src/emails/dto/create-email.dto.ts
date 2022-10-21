import { OmitType } from '@nestjs/swagger';

import { EmailDto } from './email.dto';

export class CreateEmailDto extends OmitType(EmailDto, ['emailId']) {}
