import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrder, CreateOrderDto } from './dtos';
import { ZodValidationPipe } from '@app/shared/pipes';

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateOrderDto))
  async create(@Body() order: CreateOrder) {
    return await this.ordersService.createOrder(order);
  }

  @Get()
  getHello(): string {
    return this.ordersService.getHello();
  }
}
