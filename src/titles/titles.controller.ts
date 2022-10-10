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
import { TitlesService } from './titles.service';
import { CreateTitleDto } from './dto/create-title.dto';
import { TitleDto } from './dto/title.dto';

@Controller('api/titles')
@ApiTags('titles')
export class TitlesController {
  constructor(private readonly titlesService: TitlesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a title' })
  @ApiOkResponse({
    type: TitleDto,
    description: 'The created title'
  })
  create(@Body() createTitleDto: CreateTitleDto) {
    return this.titlesService.create(createTitleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get the list of titles' })
  @ApiOkResponse({
    type: TitleDto,
    isArray: true,
    description: 'The list of titles'
  })
  findMany() {
    return this.titlesService.findMany();
  }

  @Get(':titleId')
  @ApiOperation({ summary: 'Find a title by its id' })
  @ApiOkResponse({
    type: TitleDto,
    description: 'The found title'
  })
  findUnique(@Param('titleId', ParseIntPipe) titleId: number) {
    return this.titlesService.findUnique({ titleId });
  }

  @Patch(':titleId')
  @ApiOkResponse({ type: TitleDto })
  update(
    @Param('titleId', ParseIntPipe) titleId: number,
    @Body() updateJobDto: CreateTitleDto
  ) {
    return this.titlesService.update({ titleId }, updateJobDto);
  }

  @Delete(':titleId')
  @Get(':titleId')
  @ApiOperation({ summary: 'Delete a title by its id' })
  async delete(@Param('titleId', ParseIntPipe) titleId: number) {
    await this.titlesService.delete({ titleId });
  }
}
