import { Injectable } from '@nestjs/common';
import { Prisma, products } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { decimalToNumber } from 'src/utils/decimal-to-number';
import { serialize } from 'src/utils/serialize';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaProductDto } from './dto/prisma-product.dto';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  private transformPrismaToProduct(product: PrismaProductDto): ProductDto {
    let transformedProduct: Omit<ProductDto, 'nameWithCode'>;
    if (product) {
      const { price, ...rest } = product;
      transformedProduct = {
        price: decimalToNumber(price),
        ...rest
      };
    } else {
      transformedProduct = product as unknown as ProductDto;
    }

    return serialize(ProductDto, transformedProduct);
  }

  async findUnique(
    where: Prisma.productsWhereUniqueInput
  ): Promise<ProductDto | null> {
    const product = await this.prisma.products.findUnique({
      where
    });

    return this.transformPrismaToProduct(product);
  }

  async findMany(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.productsWhereUniqueInput;
      where?: Prisma.productsWhereInput;
      orderBy?: Prisma.productsOrderByWithRelationInput;
    } = {}
  ): Promise<ProductDto[]> {
    const products = await this.prisma.products.findMany({
      ...params
    });
    return products.map(this.transformPrismaToProduct);
  }

  async create(data: CreateProductDto): Promise<ProductDto> {
    const { price, ...rest } = data;
    const createdBy = 'USER_ID_HERE';
    const updatedBy = 'USER_ID_HERE';

    const product = await this.prisma.products.create({
      data: {
        ...rest,
        price: new Prisma.Decimal(price),
        createdBy,
        updatedBy
      }
    });
    return this.transformPrismaToProduct(product);
  }

  async update(
    where: Prisma.productsWhereUniqueInput,
    data: CreateProductDto
  ): Promise<ProductDto> {
    const { price, ...rest } = data;
    const updatedBy = 'USER_ID_HERE';

    const product = await this.prisma.products.update({
      where,
      data: {
        ...rest,
        price: new Prisma.Decimal(price),
        updatedBy
      }
    });
    return this.transformPrismaToProduct(product);
  }

  async delete(where: Prisma.productsWhereUniqueInput): Promise<void> {
    await this.prisma.products.delete({ where });
  }
}
