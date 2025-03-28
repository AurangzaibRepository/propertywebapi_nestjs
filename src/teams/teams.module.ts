import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './team.model';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';

@Module({
  imports: [SequelizeModule.forFeature([Team])],
  providers: [TeamsService],
  controllers: [TeamsController],
})
export class TeamsModule {}
