import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from 'src/teams/team.model';

export class DepartmentLinkPipe implements PipeTransform {
  constructor(
    @InjectModel(Team)
    private team: typeof Team,
  ) {}

  async transform(value: number) {
    // Check if department is linked with team
    const team = await this.team.findOne({
      where: { DepartmentId: value },
    });

    if (team) {
      throw new BadRequestException('Department is linked with team');
    }

    return value;
  }
}
