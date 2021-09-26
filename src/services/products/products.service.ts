import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;

  private product: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      descripcion: 'bla bla',
      price: 122,
      stock: 23,
      image: 'url',
    },
  ];

  findAll() {
    return this.product;
  }

  findOne(id: number) {
    return this.product.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.product.push(newProduct);
    return newProduct;
  }

  upgrade(id: number, payload: any) {
    const i = this.product.findIndex((item) => item.id === id);
    let message = '';

    if (i !== -1) {
      this.product[i] = {
        id: id,
        ...payload,
      };
      message = 'Product updated';
    } else message = 'Product not found';
    return message;
  }

  delete(id: number) {
    const i = this.product.findIndex((item) => item.id === id);
    let message = '';
    if (i !== -1) {
      this.product.splice(i, 1);
      message = 'Product delete';
    } else message = 'Product no delete';
    return message;
  }
}
