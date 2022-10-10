import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { DocumentTypeDto } from './dto/document-type.dto';

@Injectable()
export class DocumentTypesService {
  constructor(private prisma: PrismaService) {}

  async findUnique(
    where: Prisma.documentTypesWhereUniqueInput
  ): Promise<DocumentTypeDto | null> {
    const documentType = await this.prisma.documentTypes.findUnique({
      where
    });

    return plainToInstance(DocumentTypeDto, documentType);
  }

  async findMany(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.documentTypesWhereUniqueInput;
      where?: Prisma.documentTypesWhereInput;
      orderBy?: Prisma.documentTypesOrderByWithRelationInput;
    } = {}
  ): Promise<DocumentTypeDto[]> {
    const documentTypes = await this.prisma.documentTypes.findMany({
      ...params
    });
    return documentTypes.map(documentType =>
      plainToInstance(DocumentTypeDto, documentType)
    );
  }

  async create(data: CreateDocumentTypeDto): Promise<DocumentTypeDto> {
    const createdBy = 'USER_ID_HERE';
    const updatedBy = 'USER_ID_HERE';

    const documentType = await this.prisma.documentTypes.create({
      data: {
        ...data,
        createdBy,
        updatedBy
      }
    });
    return plainToInstance(DocumentTypeDto, documentType);
  }

  async update(
    where: Prisma.documentTypesWhereUniqueInput,
    data: CreateDocumentTypeDto
  ): Promise<DocumentTypeDto> {
    const updatedBy = 'USER_ID_HERE';

    const documentType = await this.prisma.documentTypes.update({
      where,
      data: {
        ...data,
        updatedBy
      }
    });
    return plainToInstance(DocumentTypeDto, documentType);
  }

  async delete(where: Prisma.documentTypesWhereUniqueInput): Promise<void> {
    await this.prisma.documentTypes.delete({ where });
  }
}
