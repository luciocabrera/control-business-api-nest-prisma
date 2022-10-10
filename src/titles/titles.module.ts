import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { TitlesController } from './titles.controller';
import { TitlesService } from './titles.service';

@Module({
  controllers: [TitlesController],
  providers: [TitlesService],
  imports: [PrismaModule]
})
export class TitlesModule {}
