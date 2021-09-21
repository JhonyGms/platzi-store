import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndponit() {
    return 'soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'hello /sas/';
  }

  @Get('products/:id')
  getProduct(@Param() params: any) {
    return `product ${params.id}`;
  }
}
