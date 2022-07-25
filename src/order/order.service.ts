import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderInput } from './dto/create-order.input';
import { Order, OrderDocument } from './order.schema';
import { OrderItemsService } from '../order-items/order-items.service';
import { OrderItem } from 'src/order-items/order-items.schema';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>, private orderItemsService: OrderItemsService) {}

  async create(createOrderInput: CreateOrderInput): Promise<Order> {

    const createdOrder = new this.orderModel(createOrderInput);
    const order = await createdOrder.save();
    let order_items = createOrderInput.order_items.map(od=>({...od,order_id:order._id}))
    await this.orderItemsService.insertMany(order_items)
    return order;
  }

  // findAll(co) {
  //   return await this.orderItemsService.findAll({order_id:id})
  // }

  async findOrderItemByOrderId(option){
    return await this.orderItemsService.findAll(option);
  }

  async findOrdersByAddress(address){
    return await this.orderModel.find({address});
  }

  async findOne(id: number) {
    return await this.orderModel.findById(id);
  }

  async update(option){
    const result =  await this.orderModel.updateOne({_id: option.id},option);
    console.log(result);
    return await this.findOne(option.id);
  }

  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}
