import {
  Controller,
  Get,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { StatesService } from './states.service';
import { State } from './state.model';
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

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, StateExistsPipe) id: number,
  ): Promise<string> {
    await this.statesService.delete(id);

    return 'State deleted successfully';
  }
}
