import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderItemInput } from './dto/create-order-item.input';
import { OrderItem, OrderItemDocument } from './order-items.schema';

@Injectable()
export class OrderItemsService {
  constructor(@InjectModel(OrderItem.name) private orderItemModel: Model<OrderItemDocument>) {}

  async create(createOrderItemInput: OrderItem): Promise<OrderItem> {
    // const createdOrder = new this.orderItemModel(createOrderItemInput);
    return await this.orderItemModel.create(createOrderItemInput)
  }
  async insertMany(createOrderItemInput: OrderItem[]): Promise<OrderItem[]> {
    // const createdOrder = new this.orderItemModel(createOrderItemInput);
    return await this.orderItemModel.insertMany(createOrderItemInput)
  }
  async findAll(condition) {
    return condition === null ? await this.orderItemModel.find() : await this,this.orderItemModel.find(condition);
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItem`;
  }

  // update(id: number, updateOrderItemInput: UpdateOrderItemInput) {
  //   return `This action updates a #${id} orderItem`;
  // }

  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}
