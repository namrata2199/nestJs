import { Module } from '@nestjs/common';
import { DemoController } from './demo.controllers';
import { DemoServices } from './demo.services';
@Module({
  imports: [DemoModule],
  controllers: [DemoController],
  providers: [DemoServices],
})
export class DemoModule {}