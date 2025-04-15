import { Module } from '@nestjs/common';
import { AmenitiesService } from './amenities.service';
import { AmenitiesController } from './amenities.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Amenity } from './amenity.model';

@Module({
  imports: [SequelizeModule.forFeature([Amenity])],
  providers: [AmenitiesService],
  controllers: [AmenitiesController],
})
export class AmenitiesModule {}
