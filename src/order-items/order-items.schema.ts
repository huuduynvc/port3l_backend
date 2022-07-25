import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

export type OrderItemDocument = OrderItem & Document;

@ObjectType()
@Schema()
export class OrderItem {
  // @Field(() => ID)
  // id: string
  
  @Field()
  @Prop()
  order_id: string;

  @Field()
  @Prop()
  token_address: string;

  @Field()
  @Prop()
  token_id: string;

  @Field()
  @Prop()
  owner_of: string;

  @Field()
  @Prop()
  block_number: string;

  @Field()
  @Prop()
  block_number_minted: string;

  @Field()
  @Prop()
  token_hash: string;

  @Field()
  @Prop()
  contract_type: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  symbol: string;

  @Field()
  @Prop()
  token_uri: string;

  @Field()
  @Prop()
  metadata: string;

  @Field({ nullable: true })
  @Prop({ required: false })
  creation_date: Date;

  @Field({ nullable: true })
  @Prop({ required: false })
  modification_date: Date;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);