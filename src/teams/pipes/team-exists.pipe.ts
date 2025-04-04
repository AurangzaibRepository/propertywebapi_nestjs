import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from '../team.model';

export class TeamExistsPipe implements PipeTransform {
  constructor(
    @InjectModel(Team)
    private team: typeof Team,
  ) {}

  async transform(value: number) {
    const data = await this.team.findByPk(value);

    if (!data) {
      throw new BadRequestException('Team not found');
    }

    return value;
  }
}
