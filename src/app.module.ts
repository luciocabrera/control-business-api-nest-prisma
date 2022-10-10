import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { CustomersModule } from './customers/customers.module';
import { DocumentTypesModule } from './document-types/document-types.module';
import { InvoicesModule } from './invoices/invoices.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { TitlesModule } from './titles/titles.module';

@Module({
  imports: [
    CustomersModule,
    DocumentTypesModule,
    TitlesModule,
    ProductsModule,
    InvoicesModule
  ],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ]
})
export class AppModule {}
