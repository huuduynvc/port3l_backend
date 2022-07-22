import { Controller, Get , Post, Body, Param } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { CreateOrderInput } from './dto/create-order.input';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/create')
  async createOrder(@Body('order') createOrderInput: CreateOrderInput) {
    return this.orderService.create(createOrderInput);
  }
} 