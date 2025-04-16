import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DevelopersController } from './developers.controller';
import { Developer } from './developer.model';
import { DevelopersService } from './developers.service';
import { PropertiesModule } from 'src/properties/properties.module';

@Module({
  imports: [PropertiesModule, SequelizeModule.forFeature([Developer])],
  controllers: [DevelopersController],
  providers: [DevelopersService],
})
export class DevelopersModule {}
