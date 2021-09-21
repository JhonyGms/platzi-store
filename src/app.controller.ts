import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('products/filter')
  getFilter() {
    return `yo soy una ruta`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categorys/:categoryId/products/:productId')
  getCategory(
    @Param('productId') productId: string,
    @Param('categoryId') categoryId: string,
  ) {
    return `Category ${categoryId} product ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit: 100,
    @Query('offset') offset: 50,
    @Query('brand') brand: string,
  ) {
    return `products limit=>${limit} offset=>${offset} brand=>${brand}`;
  }
}
