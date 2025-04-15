import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeamLanguage } from './team-language.model';

@Module({
    imports: [SequelizeModule.forFeature([TeamLanguage])],
})
export class TeamLanguageModule {}
