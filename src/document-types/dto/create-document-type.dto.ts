import { OmitType } from '@nestjs/swagger';
import { DocumentTypeDto } from './document-type.dto';

export class CreateDocumentTypeDto extends OmitType(DocumentTypeDto, [
  'documentTypeId',
  'createdAt',
  'createdBy',
  'updatedAt',
  'updatedBy'
]) {}
