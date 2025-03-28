import { Global, Module } from '@nestjs/common';
import { FormatService } from './format.service';

@Global()
@Module({
  providers: [FormatService],
  exports: [FormatService],
})
export class HelpersModule {}
