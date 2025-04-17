import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TeamLanguage } from './team-language.model';

@Injectable()
export class TeamLanguagesService {
  constructor(
    @InjectModel(TeamLanguage)
    private teamLanguage: typeof TeamLanguage,
  ) {}

  async getByAttribute(
    attribute: string,
    value: any,
  ): Promise<TeamLanguage | null> {
    const data = await this.teamLanguage.findOne({
      where: { [attribute]: value },
    });

    return data;
  }
}
