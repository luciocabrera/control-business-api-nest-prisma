import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { decimalToNumber } from 'src/utils/decimal-to-number';
import { serialize } from 'src/utils/serialize';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { InvoiceCustomerDto } from './dto/invoice-customer';
import { InvoiceDto } from './dto/invoice.dto';
import { PrismaInvoiceDto } from './dto/prisma-invoice.dto';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  private transformPrismaToInvoice(invoice: PrismaInvoiceDto): InvoiceDto {
    let transformedInvoice: Omit<InvoiceDto, 'customer'> & {
      customer: InvoiceCustomerDto;
    };
    if (invoice) {
      const {
        total,
        subtotal,
        taxes,
        taxesPercentage,
        invoiceDetails,
        customer,
        ...rest
      } = invoice;
      transformedInvoice = {
        ...rest,
        customer: serialize(InvoiceCustomerDto, customer),
        total: decimalToNumber(total),
        subtotal: decimalToNumber(subtotal),
        taxes: decimalToNumber(taxes),
        taxesPercentage: decimalToNumber(taxesPercentage),
        invoiceDetails: invoiceDetails.map(detail => {
          const { quantity, priceUnit, priceQuantity, ...rest } = detail;
          return {
            ...rest,
            quantity: decimalToNumber(quantity),
            priceUnit: decimalToNumber(priceUnit),
            priceQuantity: decimalToNumber(priceQuantity)
          };
        })
      };
    }
    return serialize(InvoiceDto, transformedInvoice);
  }

  async findUnique(
    where: Prisma.invoicesWhereUniqueInput
  ): Promise<InvoiceDto | null> {
    const invoice = await this.prisma.invoices.findUnique({
      where,
      include: {
        customer: {
          include: {
            documentType: { select: { name: true } },
            title: { select: { name: true } }
          }
        },
        invoiceDetails: {
          include: { product: { select: { name: true, code: true } } }
        }
      }
    });

    return this.transformPrismaToInvoice(invoice);
  }

  async findMany(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.invoicesWhereUniqueInput;
      where?: Prisma.invoicesWhereInput;
      orderBy?: Prisma.invoicesOrderByWithRelationInput;
    } = {}
  ): Promise<InvoiceDto[]> {
    const invoices = await this.prisma.invoices.findMany({
      include: {
        customer: {
          include: {
            documentType: { select: { name: true } },
            title: { select: { name: true } }
          }
        },
        invoiceDetails: {
          include: { product: { select: { name: true, code: true } } }
        }
      },
      ...params
    });
    return invoices.map(this.transformPrismaToInvoice);
  }

  async create(data: CreateInvoiceDto): Promise<InvoiceDto> {
    const { invoiceDetails, customerId, ...rest } = data;
    const createdBy = 'USER_ID_HERE';
    const updatedBy = 'USER_ID_HERE';

    const invoice = await this.prisma.invoices.create({
      include: {
        customer: {
          include: {
            documentType: { select: { name: true } },
            title: { select: { name: true } }
          }
        },
        invoiceDetails: {
          include: { product: { select: { name: true, code: true } } }
        }
      },
      data: {
        ...rest,
        invoiceDetails: { create: invoiceDetails },
        customer: {
          connect: { customerId: customerId }
        },
        createdBy,
        updatedBy
      }
    });
    return this.transformPrismaToInvoice(invoice);
  }

  // async update(
  //   where: Prisma.invoicesWhereUniqueInput,
  //   data: UpdateinvoiceDto
  // ): Promise<InvoiceDto> {
  //   const { firstName, lastName, addresses, documentTypeName, titleName } =
  //     data;
  //   const { invoiceId } = where;
  //   const createdBy = 'USER_ID_HERE';
  //   const updatedBy = 'USER_ID_HERE';

  //   const invoice = await this.prisma.invoices.update({
  //     where,
  //     include: {
  //       documentType: true,
  //       addresses: true
  //     },
  //     data: {
  //       firstName,
  //       lastName,
  //       addresses: {
  //         deleteMany: { invoiceId: invoiceId },
  //         create: { ...addresses }
  //       },
  //       documentType: {
  //         connectOrCreate: {
  //           where: { name: documentTypeName },
  //           create: {
  //             name: documentTypeName,
  //             createdBy,
  //             updatedBy
  //           }
  //         }
  //       },
  //       title: {
  //         connectOrCreate: {
  //           where: { name: titleName },
  //           create: {
  //             name: titleName,
  //             createdBy,
  //             updatedBy
  //           }
  //         }
  //       },
  //       createdBy,
  //       updatedBy
  //     }
  //   });
  //   return plainToInstance(InvoiceDto, invoice);
  // }

  async delete(where: Prisma.invoicesWhereUniqueInput): Promise<void> {
    await this.prisma.invoices.delete({ where });
  }
}
