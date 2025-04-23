import { Module } from '@nestjs/common';
import { AmenitiesService } from './amenities.service';
import { AmenitiesController } from './amenities.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Amenity } from './amenity.model';
import { PropertyAmenitiesModule } from 'src/property-amenities/property-amenities.module';

@Module({
  imports: [PropertyAmenitiesModule, SequelizeModule.forFeature([Amenity])],
  providers: [AmenitiesService],
  controllers: [AmenitiesController],
})
export class AmenitiesModule {}
