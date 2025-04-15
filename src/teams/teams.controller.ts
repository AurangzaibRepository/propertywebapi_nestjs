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
import { TeamsService } from './teams.service';
import { Team } from './team.model';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamExistsPipe } from './pipes/team-exists.pipe';
import { TeamLinkPipe } from './pipes/team-link.pipe';

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

  @Post()
  async create(@Body() createTeamDto: CreateTeamDto): Promise<string> {
    await this.teamsService.save(createTeamDto);

    return 'Team created successfully';
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, TeamExistsPipe) id: number,
    @Body() updateTeamDto: CreateTeamDto,
  ): Promise<string> {
    await this.teamsService.update(id, updateTeamDto);

    return 'Team updated successfully';
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', ParseIntPipe, TeamExistsPipe, TeamLinkPipe) id: number,
  ): Promise<string> {
    await this.teamsService.delete(id);

    return 'Team deleted successfully';
  }
}
