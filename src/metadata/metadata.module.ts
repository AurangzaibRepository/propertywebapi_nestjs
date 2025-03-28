import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MetadataService } from './metadata.service';
import { Metadata } from './metadata.model';
import { MetadataController } from './metadata.controller';

@Module({
  imports: [SequelizeModule.forFeature([Metadata])],
  providers: [MetadataService],
  controllers: [MetadataController],
})
export class MetadataModule {}
