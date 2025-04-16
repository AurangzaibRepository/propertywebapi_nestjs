import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Club } from './club.model';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';

@Module({
    imports: [SequelizeModule.forFeature([Club])],
    controllers: [ClubsController],
    providers: [ClubsService]
})
export class ClubsModule {}
