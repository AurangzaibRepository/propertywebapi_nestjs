import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { DeveloperExistsPipe } from './pipes/developer-exists.pipe';
import { DeveloperLinkPipe } from './pipes/developer-link.pipe';
import { DevelopersService } from './developers.service';
import { Developer } from './developer.model';
import { CreateDeveloperDto } from './dto/create-developer.dto';

@Controller('developers')
export class DevelopersController {
  constructor(private developersService: DevelopersService) {}

  @Get()
  async all(): Promise<Developer[]> {
    const data = await this.developersService.getAll();

    return data;
  }

  @Get('listing/:pageNumber')
  async listing(
    @Param('pageNumber', ParseIntPipe) pageNumber: number,
  ): Promise<Developer[]> {
    const data = await this.developersService.getListing(pageNumber);

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, DeveloperExistsPipe) id: number,
  ): Promise<Developer | string> {
    const data = await this.developersService.getDetails(id);

    return data ?? 'Developer not found';
  }

  @Post()
  async create(
    @Body() createDeveloperDto: CreateDeveloperDto,
  ): Promise<string> {
    await this.developersService.save(createDeveloperDto);

    return 'Developer created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, DeveloperExistsPipe) id: number,
    @Body() createDeveloperDto: CreateDeveloperDto,
  ): Promise<string> {
    await this.developersService.update(id, createDeveloperDto);

    return 'Developer updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, DeveloperExistsPipe, DeveloperLinkPipe)
    id: number,
  ): Promise<string> {
    await this.developersService.delete(id);

    return 'Developer deleted successfully';
  }
}
