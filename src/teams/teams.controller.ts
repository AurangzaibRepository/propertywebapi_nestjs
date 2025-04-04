import {
  Controller,
  Get,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './team.model';
import { TeamExistsPipe } from './pipes/team-exists.pipe';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  async all(): Promise<Team[]> {
    const data = await this.teamsService.getAll();

    return data;
  }

  @Get('listing/:pageNumber')
  async listing(
    @Param('pageNumber', ParseIntPipe) pageNumber: number,
  ): Promise<Team[]> {
    const data = await this.teamsService.getListing(pageNumber);

    return data;
  }

  @Get(':id')
  async details(
    @Param('id', ParseIntPipe, TeamExistsPipe) id: number,
  ): Promise<Team | string> {
    const data = await this.teamsService.getDetails(id);

    return data ?? 'Team not found';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, TeamExistsPipe) id: number,
  ): Promise<string> {
    await this.teamsService.delete(id);

    return 'Team deleted successfully';
  }
}
