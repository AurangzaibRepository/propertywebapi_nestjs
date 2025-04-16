import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TeamsService } from 'src/teams/teams.service';

export class DepartmentLinkPipe implements PipeTransform {
  constructor(private teamsService: TeamsService) {}

  async transform(value: number) {
    // Check if department is linked with team
    const team = await this.teamsService.getByAttribute('DepartmentId', value);

    if (team) {
      throw new BadRequestException('Department is linked with team');
    }

    return value;
  }
}
