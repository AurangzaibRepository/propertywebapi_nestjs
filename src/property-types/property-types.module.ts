import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PropertyType } from './property-type.model';
import { PropertyTypesService } from './property-types.service';
import { PropertyTypesController } from './property-types.controller';

@Module({
  imports: [SequelizeModule.forFeature([PropertyType])],
  providers: [PropertyTypesService],
  controllers: [PropertyTypesController],
})
export class PropertyTypesModule {}
