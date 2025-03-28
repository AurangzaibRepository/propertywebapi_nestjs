import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './language.model';
import { LanguagesController } from './languages.controller';

@Module({
  imports: [SequelizeModule.forFeature([Language])],
  controllers: [LanguagesController],
})
export class LanguagesModule {}
