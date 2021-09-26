import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getFilter() {
    return { message: `yo soy una ruta` };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return { message: `product ${productId}` };
  }

  @Get('')
  getProducts(
    @Query('limit') limit: 100,
    @Query('offset') offset: 50,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=>${limit} offset=>${offset} brand=>${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(
    @Res() response: Response,
    @Param('id') id: number,
    @Body() payload: any,
  ) {
    response.status(203).send({
      id,
      message: 'accion de actualizar',
      payload,
    });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NOT_MODIFIED)
  delete(@Param('id') id: number) {
    return {
      id,
      message: 'accion de borrar',
    };
  }
}
