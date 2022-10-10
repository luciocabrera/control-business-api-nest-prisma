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
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerDto } from './dto/customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('api/customers')
@ApiTags('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a customer' })
  @ApiOkResponse({
    type: CustomerDto,
    description: 'The created customer'
  })
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get the list of customers' })
  @ApiOkResponse({
    type: CustomerDto,
    isArray: true,
    description: 'The list of customers'
  })
  findMany() {
    return this.customersService.findMany();
  }

  @Get(':customerId')
  @ApiOperation({ summary: 'Find a customer by its id' })
  @ApiOkResponse({
    type: CustomerDto,
    description: 'The found customer'
  })
  findUnique(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.findUnique({ customerId });
  }

  @Patch(':customerId')
  @ApiOperation({ summary: 'Update a customer by its id' })
  @ApiOkResponse({ type: CustomerDto })
  update(
    @Param('customerId', ParseIntPipe) customerId: number,
    @Body() updateJobDto: UpdateCustomerDto
  ) {
    return this.customersService.update({ customerId }, updateJobDto);
  }

  @Delete(':customerId')
  @Get(':customerId')
  @ApiOperation({ summary: 'Delete a customer by its id' })
  async delete(@Param('customerId', ParseIntPipe) customerId: number) {
    await this.customersService.delete({ customerId });
  }
}
