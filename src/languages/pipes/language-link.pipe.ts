import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TeamLanguagesService } from 'src/team-language/team-languages.service';

export class LanguageLinkPipe implements PipeTransform {
  constructor(private teamLanguagesService: TeamLanguagesService) {}

  async transform(value: number) {
    // Check if language is linked with team
    const teamLanguage = await this.teamLanguagesService.getByAttribute(
      'LanguageId',
      value,
    );

    if (teamLanguage) {
      throw new BadRequestException('Language is linked with team');
    }

    return value;
  }
}
