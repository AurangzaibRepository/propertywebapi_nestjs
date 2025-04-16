import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Location } from './location.model';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { PropertiesModule } from 'src/properties/properties.module';

@Module({
  imports: [PropertiesModule, SequelizeModule.forFeature([Location])],
  providers: [LocationsService],
  controllers: [LocationsController],
  exports: [LocationsService]
})
export class LocationsModule {}
