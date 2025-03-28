import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Property } from './property.model';

@Module({
  imports: [SequelizeModule.forFeature([Property])],
})
export class PropertiesModule {}
