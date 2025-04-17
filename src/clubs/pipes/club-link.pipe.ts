import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TeamsService } from 'src/teams/teams.service';

export class ClubLinkPipe implements PipeTransform {
  constructor(private teamsService: TeamsService) {}

  async transform(value: number) {
    // Check if club is linked with team
    const team = await this.teamsService.getByAttribute('ClubId', value);

    if (team) {
      throw new BadRequestException('Club is linked with team');
    }

    return value;
  }
}
