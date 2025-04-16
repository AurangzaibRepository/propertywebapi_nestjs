import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Club } from './club.model';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { TeamsModule } from 'src/teams/teams.module';

@Module({
    imports: [TeamsModule, SequelizeModule.forFeature([Club])],
    controllers: [ClubsController],
    providers: [ClubsService]
})
export class ClubsModule {}
