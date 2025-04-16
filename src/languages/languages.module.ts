import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './language.model';
import { LanguagesController } from './languages.controller';
import { LanguagesService } from './languages.service';
import { TeamLanguageModule } from 'src/team-language/team-language.module';

@Module({
  imports: [TeamLanguageModule, SequelizeModule.forFeature([Language])],
  controllers: [LanguagesController],
  providers: [LanguagesService]
})
export class LanguagesModule {}
