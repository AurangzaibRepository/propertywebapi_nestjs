import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './team.model';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { PropertiesModule } from 'src/properties/properties.module';

@Module({
  imports: [PropertiesModule, SequelizeModule.forFeature([Team])],
  providers: [TeamsService],
  controllers: [TeamsController],
  exports: [TeamsService]
})
export class TeamsModule {}
