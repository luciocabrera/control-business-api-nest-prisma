import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService],
  imports: [PrismaModule]
})
export class InvoicesModule {}
