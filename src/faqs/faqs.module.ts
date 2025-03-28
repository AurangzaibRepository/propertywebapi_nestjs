import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FaqsController } from './faqs.controller';
import { FaqsService } from './faqs.service';
import { FAQ } from './faq.model';

@Module({
  imports: [SequelizeModule.forFeature([FAQ])],
  controllers: [FaqsController],
  providers: [FaqsService],
})
export class FaqsModule {}
