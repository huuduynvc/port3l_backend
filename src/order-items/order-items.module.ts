import { Module } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItemsResolver } from './order-items.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderItem, OrderItemSchema } from './order-items.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: OrderItem.name, schema: OrderItemSchema }])],
  providers: [OrderItemsResolver, OrderItemsService],
  exports:[OrderItemsService]
})
export class OrderItemsModule {}
