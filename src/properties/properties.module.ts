import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Property } from './property.model';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';

@Module({
  imports: [SequelizeModule.forFeature([Property])],
  providers: [PropertiesService],
  controllers: [PropertiesController],
})
export class PropertiesModule {}
