import { PipeTransform, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TeamLanguage } from 'src/team-language/team-language.model';

export class LanguageLinkPipe implements PipeTransform {
  constructor(
    @InjectModel(TeamLanguage)
    private teamLanguage: typeof TeamLanguage,
  ) {}

  async transform(value: number) {
    // Check if language is linked with team
    const teamLanguage = await this.teamLanguage.findOne({
      where: { LanguageId: value },
    });

    if (teamLanguage) {
      throw new BadRequestException('Language is linked with team');
    }

    return value;
  }
}
