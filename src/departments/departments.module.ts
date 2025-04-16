import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Department } from './department.model';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { TeamsModule } from 'src/teams/teams.module';

@Module({
  imports: [TeamsModule, SequelizeModule.forFeature([Department])],
  providers: [DepartmentsService],
  controllers: [DepartmentsController],
})
export class DepartmentsModule {}
