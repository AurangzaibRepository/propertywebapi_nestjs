import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from 'src/teams/team.model';

export class ClubLinkPipe implements PipeTransform {
  constructor(
    @InjectModel(Team)
    private team: typeof Team,
  ) {}

  async transform(value: number) {
    // Check if club is linked with team
    const team = await this.team.findOne({
      where: { ClubId: value },
    });

    if (team) {
      throw new BadRequestException('Club is linked with team');
    }

    return value;
  }
}
