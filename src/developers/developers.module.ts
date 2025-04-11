import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DevelopersController } from './developers.controller';
import { Developer } from './developer.model';
import { DevelopersService } from './developers.service';

@Module({
  imports: [SequelizeModule.forFeature([Developer])],
  controllers: [DevelopersController],
  providers: [DevelopersService],
})
export class DevelopersModule {}
