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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductDto } from './dto/product.dto';

@Controller('api/products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a product' })
  @ApiOkResponse({
    type: ProductDto,
    description: 'The created product'
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.ProductsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get the list of products' })
  @ApiOkResponse({
    type: ProductDto,
    isArray: true,
    description: 'The list of products'
  })
  findMany() {
    return this.ProductsService.findMany();
  }

  @Get(':productId')
  @ApiOperation({ summary: 'Find a product by its id' })
  @ApiOkResponse({
    type: ProductDto,
    description: 'The found product'
  })
  findUnique(@Param('productId', ParseIntPipe) productId: number) {
    return this.ProductsService.findUnique({ productId });
  }

  @Patch(':productId')
  @ApiOperation({ summary: 'Update a product by its id' })
  @ApiOkResponse({ type: ProductDto })
  update(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() updateJobDto: CreateProductDto
  ) {
    return this.ProductsService.update({ productId }, updateJobDto);
  }

  @Delete(':productId')
  @Get(':productId')
  @ApiOperation({ summary: 'Delete a product by its id' })
  async delete(@Param('productId', ParseIntPipe) productId: number) {
    await this.ProductsService.delete({ productId });
  }
}
