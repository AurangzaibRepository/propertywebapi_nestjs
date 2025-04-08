import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { StatesService } from './states.service';
import { State } from './state.model';
import { CreateStateDto } from './dto/create-state.dto';
import { StateExistsPipe } from './pipes/state-exists.pipe';

@Controller('states')
export class StatesController {
  constructor(private statesService: StatesService) {}

  @Get()
  async all(): Promise<State[]> {
    const data = await this.statesService.getAll();

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, StateExistsPipe) id: number,
  ): Promise<State | string> {
    const data = await this.statesService.getDetails(id);

    return data ?? 'State not found';
  }

  @Post()
  async create(@Body() createStateDto: CreateStateDto): Promise<string> {
    await this.statesService.save(createStateDto);

    return 'State created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, StateExistsPipe) id: number,
    @Body() updateStateDto: CreateStateDto,
  ): Promise<string> {
    await this.statesService.update(id, updateStateDto);

    return 'State updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, StateExistsPipe) id: number,
  ): Promise<string> {
    await this.statesService.delete(id);

    return 'State deleted successfully';
  }
}
