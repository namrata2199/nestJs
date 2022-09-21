import { Controller, Get } from '@nestjs/common';
import { DemoServices } from './demo.services';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoServices: DemoServices) {}

  @Get()
  getBye(): string {
    return this.demoServices.getBye();
  }
}
