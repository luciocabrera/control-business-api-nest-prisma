import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { DocumentTypesController } from './document-types.controller';
import { DocumentTypesService } from './document-types.service';

@Module({
  controllers: [DocumentTypesController],
  providers: [DocumentTypesService],
  imports: [PrismaModule]
})
export class DocumentTypesModule {}
