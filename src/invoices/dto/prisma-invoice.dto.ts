import { ApiHideProperty, ApiProperty, OmitType } from '@nestjs/swagger';
import { customers, Prisma } from '@prisma/client';
import { Exclude, Expose, Type } from 'class-transformer';
import { InvoiceDetailDto } from './invoice-detail.dto';
import { InvoiceDto } from './invoice.dto';
import { PrismaInvoiceDetailDto } from './prisma-invoice-detail.dto';

const invoiceWithParameters = Prisma.validator<Prisma.invoicesArgs>()({
  include: {
    customer: true,
    invoicesDetails: {
      include: { product: { select: { name: true, code: true } } }
    }
  }
});

type InvoiceWithParameters = Prisma.invoicesGetPayload<
  typeof invoiceWithParameters
>;
export class PrismaInvoiceDto
  extends OmitType(InvoiceDto, [
    'customer',
    'subtotal',
    'total',
    'taxes',
    'taxesPercentage',
    'invoicesDetails'
  ])
  implements InvoiceWithParameters
{
  @Expose()
  customer: customers;

  @Expose()
  @ApiProperty({
    description: 'Detail of the Invoice',
    type: InvoiceDetailDto
  })
  @Type(() => PrismaInvoiceDetailDto)
  @Expose()
  invoicesDetails: PrismaInvoiceDetailDto[];

  @Exclude()
  @ApiHideProperty()
  subtotal: Prisma.Decimal;

  @Exclude()
  @ApiHideProperty()
  total: Prisma.Decimal;

  @Exclude()
  @ApiHideProperty()
  taxes: Prisma.Decimal;

  @Exclude()
  @ApiHideProperty()
  taxesPercentage: Prisma.Decimal;
}
