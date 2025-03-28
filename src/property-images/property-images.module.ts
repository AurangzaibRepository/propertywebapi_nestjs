import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PropertyImage } from './property-image.model';

@Module({
  imports: [SequelizeModule.forFeature([PropertyImage])],
})
export class PropertyImagesModule {}
