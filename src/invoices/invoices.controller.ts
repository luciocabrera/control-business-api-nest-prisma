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
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { InvoiceDto } from './dto/invoice.dto';
// import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller('api/invoices')
@ApiTags('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a invoice' })
  @ApiOkResponse({
    type: InvoiceDto,
    description: 'The created invoice'
  })
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoicesService.create(createInvoiceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get the list of invoices' })
  @ApiOkResponse({
    type: InvoiceDto,
    isArray: true,
    description: 'The list of invoices'
  })
  findMany() {
    return this.invoicesService.findMany();
  }

  @Get(':invoiceId')
  @ApiOperation({ summary: 'Find a invoice by its id' })
  @ApiOkResponse({
    type: InvoiceDto,
    description: 'The found invoice'
  })
  findUnique(@Param('invoiceId', ParseIntPipe) invoiceId: number) {
    return this.invoicesService.findUnique({ invoiceId });
  }

  @Patch(':invoiceId')
  @ApiOperation({ summary: 'Update a invoice by its id' })
  @ApiOkResponse({ type: InvoiceDto })
  update(
    @Param('invoiceId', ParseIntPipe) invoiceId: number,
    @Body() updateJobDto: CreateInvoiceDto
  ) {
    return this.invoicesService.update({ invoiceId }, updateJobDto);
  }

  @Delete(':invoiceId')
  @Get(':invoiceId')
  @ApiOperation({ summary: 'Delete a invoice by its id' })
  async delete(@Param('invoiceId', ParseIntPipe) invoiceId: number) {
    await this.invoicesService.delete({ invoiceId });
  }
}
