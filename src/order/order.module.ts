import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.schema';
import { OrderItemsService } from '../order-items/order-items.service';
import { OrderItemsModule } from 'src/order-items/order-items.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),OrderItemsModule],
  controllers: [OrderController],
  providers: [OrderResolver, OrderService]
})
export class OrderModule {}
