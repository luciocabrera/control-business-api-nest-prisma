import { OmitType } from '@nestjs/swagger';
import { TitleDto } from './title.dto';

export class CreateTitleDto extends OmitType(TitleDto, [
  'titleId',
  'createdAt',
  'createdBy',
  'updatedAt',
  'updatedBy'
]) {}
