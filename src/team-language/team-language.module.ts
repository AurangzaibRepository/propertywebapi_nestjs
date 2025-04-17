import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeamLanguage } from './team-language.model';
import { TeamLanguagesService } from './team-languages.service';

@Module({
  imports: [SequelizeModule.forFeature([TeamLanguage])],
  providers: [TeamLanguagesService],
  exports: [TeamLanguagesService],
})
export class TeamLanguageModule {}
