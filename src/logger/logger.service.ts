import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class Logger extends ConsoleLogger {
  log(message: any, context?: string) {
    super.log(`Custom logger: ${message}`, context);
  }
}
