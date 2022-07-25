import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';
import { OrderItem } from 'src/order-items/order-items.schema';
import { OrderItemsInput } from 'src/order-items/inputs/order-items.input';

export type OrderDocument = Order & Document;

@ObjectType()
@Schema()
export class Order {
  @Field(() => ID)
  id: string

  @Field()
  @Prop()
  address: string;

  @Field({nullable:true, defaultValue:false})
  @Prop({default:false})
  is_payment: boolean;

  @Field({ nullable: true})
  @Prop()
  creation_date: Date

  @Field({ nullable: true})
  @Prop()
  modification_date: Date
}

export const OrderSchema = SchemaFactory.createForClass(Order);