import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemInput } from './dto/create-order-item.input';
import { OrderItem } from './order-items.schema';
import { OrderItemsInput } from './inputs/order-items.input';

@Resolver(() => OrderItem)
export class OrderItemsResolver {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Mutation(() => OrderItem)
  async createOrderItem(@Args('createOrderItemInput') createOrderItemInput: CreateOrderItemInput) {
    return await this.orderItemsService.create(createOrderItemInput);
  }

  // @Query(() => [OrderItem], { name: 'orderItems' })
  // findAll() {
  //   return this.orderItemsService.findAll();
  // }

  // @Query(() => OrderItem, { name: 'orderItem' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.orderItemsService.findOne(id);
  // }

  // @Mutation(() => OrderItem)
  // updateOrderItem(@Args('updateOrderItemInput') updateOrderItemInput: UpdateOrderItemInput) {
  //   return this.orderItemsService.update(updateOrderItemInput.id, updateOrderItemInput);
  // }

  // @Mutation(() => OrderItem)
  // removeOrderItem(@Args('id', { type: () => Int }) id: number) {
  //   return this.orderItemsService.remove(id);
  // }
}
