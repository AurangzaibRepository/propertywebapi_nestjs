import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PropertyAmenitiesService } from './property-amenities.service';
import { PropertyAmenity } from './property-amenity.model';

@Module({
  imports: [SequelizeModule.forFeature([PropertyAmenity])],
  providers: [PropertyAmenitiesService],
  exports: [PropertyAmenitiesService],
})
export class PropertyAmenitiesModule {}