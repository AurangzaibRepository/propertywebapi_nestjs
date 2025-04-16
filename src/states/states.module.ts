import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { State } from './state.model';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { LocationsModule } from 'src/locations/locations.module';

@Module({
  imports: [LocationsModule, SequelizeModule.forFeature([State])],
  providers: [StatesService],
  controllers: [StatesController],
})
export class StatesModule {}
