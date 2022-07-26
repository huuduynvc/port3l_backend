import { ObjectType, InputType, Int, Field, ID } from '@nestjs/graphql';
import { now } from 'mongoose';
import { OrderItemsInput } from 'src/order-items/inputs/order-items.input';
import { OrderItem } from 'src/order-items/order-items.schema';

@InputType()
export class CreateOrderInput {
  @Field()
  readonly address: string;

  // @Field()
  // readonly is_payment: boolean;

  @Field(() => [OrderItemsInput])
  readonly order_items: OrderItemsInput[];

  @Field({ nullable: true, defaultValue: new Date()})
  creation_date: Date;

  @Field({ nullable: true, defaultValue: new Date()})
  modification_date: Date;
}
