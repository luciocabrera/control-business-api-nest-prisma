import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentTypesService } from './document-types.service';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { DocumentTypeDto } from './dto/document-type.dto';

@Controller('api/documentTypes')
@ApiTags('documentTypes')
export class DocumentTypesController {
  constructor(private readonly documentTypesService: DocumentTypesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a document type' })
  @ApiOkResponse({
    type: DocumentTypeDto,
    description: 'The created document type'
  })
  create(@Body() createDocumentTypeDto: CreateDocumentTypeDto) {
    return this.documentTypesService.create(createDocumentTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get the list of document types' })
  @ApiOkResponse({
    type: DocumentTypeDto,
    isArray: true,
    description: 'The list of documentTypes'
  })
  findMany() {
    return this.documentTypesService.findMany();
  }

  @Get(':documentTypeId')
  @ApiOperation({ summary: 'Find a document type by its id' })
  @ApiOkResponse({
    type: DocumentTypeDto,
    description: 'The found document type'
  })
  findUnique(@Param('documentTypeId', ParseIntPipe) documentTypeId: number) {
    return this.documentTypesService.findUnique({ documentTypeId });
  }

  @Patch(':documentTypeId')
  @ApiOperation({ summary: 'Update a document type by its id' })
  @ApiOkResponse({ type: DocumentTypeDto })
  update(
    @Param('documentTypeId', ParseIntPipe) documentTypeId: number,
    @Body() updateJobDto: CreateDocumentTypeDto
  ) {
    return this.documentTypesService.update({ documentTypeId }, updateJobDto);
  }

  @Delete(':documentTypeId')
  @Get(':documentTypeId')
  @ApiOperation({ summary: 'Delete a document type by its id' })
  async delete(@Param('documentTypeId', ParseIntPipe) documentTypeId: number) {
    await this.documentTypesService.delete({ documentTypeId });
  }
}
