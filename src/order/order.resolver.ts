import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { CreateOrderInput } from './dto/create-order.input';
import { Order } from './order.schema';
import { OrderItem } from 'src/order-items/order-items.schema';
import { UpdateOrderInput } from './dto/update-order.input';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order)
  async createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    console.log(createOrderInput);
    return await this.orderService.create(createOrderInput);
  }

  // @Query(() => [Order], { name: 'order' })
  // findAll() {
  //   return this.orderService.findAll();
  // }

  @ResolveField('order_items', returns => [OrderItem])
  async OrderItem(@Parent() order: Order) {
    const { id } = order;
    return this.orderService.findOrderItemByOrderId({ order_id: id });
  }

  @Query(() => [Order])
  async findOrdersByAddress(@Args('address') address: String ) {
    return this.orderService.findOrdersByAddress(address);
  }

  @Mutation(() => Order)
  async updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return await this.orderService.update(updateOrderInput);
  }


  // @Mutation(() => OrderItem)
  // removeOrderItem(@Args('id', { type: () => Int }) id: number) {
  //   return this.orderItemsService.remove(id);
  // }
}
