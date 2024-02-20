import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './repositories';
import { CreateOrder } from './dtos';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrder(data: CreateOrder) {
    const order = await this.ordersRepository.create(data);

    return order;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
