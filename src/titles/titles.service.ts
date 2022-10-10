import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTitleDto } from './dto/create-title.dto';
import { TitleDto } from './dto/title.dto';

@Injectable()
export class TitlesService {
  constructor(private prisma: PrismaService) {}

  async findUnique(
    where: Prisma.titlesWhereUniqueInput
  ): Promise<TitleDto | null> {
    const title = await this.prisma.titles.findUnique({
      where
    });

    return plainToInstance(TitleDto, title);
  }

  async findMany(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.titlesWhereUniqueInput;
      where?: Prisma.titlesWhereInput;
      orderBy?: Prisma.titlesOrderByWithRelationInput;
    } = {}
  ): Promise<TitleDto[]> {
    const titles = await this.prisma.titles.findMany({
      ...params
    });
    return titles.map(title => plainToInstance(TitleDto, title));
  }

  async create(data: CreateTitleDto): Promise<TitleDto> {
    const createdBy = 'USER_ID_HERE';
    const updatedBy = 'USER_ID_HERE';

    const title = await this.prisma.titles.create({
      data: {
        ...data,
        createdBy,
        updatedBy
      }
    });
    return plainToInstance(TitleDto, title);
  }

  async update(
    where: Prisma.titlesWhereUniqueInput,
    data: CreateTitleDto
  ): Promise<TitleDto> {
    const updatedBy = 'USER_ID_HERE';

    const customer = await this.prisma.titles.update({
      where,
      data: {
        ...data,
        updatedBy
      }
    });
    return plainToInstance(TitleDto, customer);
  }

  async delete(where: Prisma.titlesWhereUniqueInput): Promise<void> {
    await this.prisma.titles.delete({ where });
  }
}
