import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoServices {
  getBye(): string {
    return 'Hi ! Namrata Patil';
  }
}
