import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body
} from '@nestjs/common';
import { StatesService } from './states.service';
import { State } from './state.model';
import { CreateStateDto } from './dto/create-state.dto';
import { IntPipe } from 'src/helpers/pipes/int-pipe.pipe';
import { StateExistsPipe } from './pipes/state-exists.pipe';
import { StateLinkPipe } from './pipes/state-link.pipe';

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
    @Param('id', IntPipe, StateExistsPipe) id: number,
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
    @Param('id', IntPipe, StateExistsPipe) id: number,
    @Body() updateStateDto: CreateStateDto,
  ): Promise<string> {
    await this.statesService.update(id, updateStateDto);

    return 'State updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', IntPipe, StateExistsPipe, StateLinkPipe) id: number,
  ): Promise<string> {
    await this.statesService.delete(id);

    return 'State deleted successfully';
  }
}
