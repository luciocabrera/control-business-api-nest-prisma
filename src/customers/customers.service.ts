import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerDto } from './dto/customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async findUnique(
    where: Prisma.customersWhereUniqueInput
  ): Promise<CustomerDto | null> {
    const customer = await this.prisma.customers.findUnique({
      where,
      include: {
        documentType: { select: { name: true } },
        title: { select: { name: true } },
        addresses: true,
        phones: true,
        emails: true
      }
    });

    return plainToInstance(CustomerDto, customer);
  }

  async findMany(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.customersWhereUniqueInput;
      where?: Prisma.customersWhereInput;
      orderBy?: Prisma.customersOrderByWithRelationInput;
    } = {}
  ): Promise<CustomerDto[]> {
    const customers = await this.prisma.customers.findMany({
      include: {
        documentType: { select: { name: true } },
        title: { select: { name: true } },
        addresses: true,
        phones: true,
        emails: true
      },
      ...params
    });
    return customers.map(customer => plainToInstance(CustomerDto, customer));
  }

  async create(data: CreateCustomerDto): Promise<CustomerDto> {
    const { addresses, phones, emails, documentTypeName, titleName, ...rest } =
      data;
    const createdBy = 'USER_ID_HERE';
    const updatedBy = 'USER_ID_HERE';

    const customer = await this.prisma.customers.create({
      include: {
        documentType: true,
        addresses: true,
        phones: true,
        emails: true
      },
      data: {
        ...rest,
        addresses: { create: { ...addresses } },
        phones: { create: { ...phones } },
        emails: {
          create: { ...emails }
        },
        documentType: {
          connectOrCreate: {
            where: { name: documentTypeName },
            create: {
              name: documentTypeName,
              createdBy,
              updatedBy
            }
          }
        },
        title: {
          connectOrCreate: {
            where: { name: titleName },
            create: {
              name: titleName,
              createdBy,
              updatedBy
            }
          }
        },
        createdBy,
        updatedBy
      }
    });
    return plainToInstance(CustomerDto, customer);
  }

  async update(
    where: Prisma.customersWhereUniqueInput,
    data: UpdateCustomerDto
  ): Promise<CustomerDto> {
    const { addresses, phones, emails, documentTypeName, titleName, ...rest } =
      data;
    const { customerId } = where;
    const createdBy = 'USER_ID_HERE';
    const updatedBy = 'USER_ID_HERE';

    const customer = await this.prisma.customers.update({
      where,
      include: {
        documentType: true,
        addresses: true,
        phones: true,
        emails: true
      },
      data: {
        ...rest,
        addresses: {
          deleteMany: { customerId: customerId },
          create: { ...addresses }
        },
        phones: {
          deleteMany: { customerId: customerId },
          create: { ...phones }
        },
        emails: {
          deleteMany: { customerId: customerId },
          create: { ...emails }
        },
        documentType: {
          connectOrCreate: {
            where: { name: documentTypeName },
            create: {
              name: documentTypeName,
              createdBy,
              updatedBy
            }
          }
        },
        title: {
          connectOrCreate: {
            where: { name: titleName },
            create: {
              name: titleName,
              createdBy,
              updatedBy
            }
          }
        },
        createdBy,
        updatedBy
      }
    });
    return plainToInstance(CustomerDto, customer);
  }

  async delete(where: Prisma.customersWhereUniqueInput): Promise<void> {
    await this.prisma.customers.delete({ where });
  }
}
