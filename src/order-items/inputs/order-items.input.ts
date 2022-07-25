import { ObjectType, InputType, Int, Field, ID } from '@nestjs/graphql';
import { now } from 'mongoose';

@InputType()
export class OrderItemsInput {
  // @Field()
  // order_id: string;

  @Field()
  token_address: string;

  @Field()
  token_id: string;

  @Field()
  owner_of: string;

  @Field()
  block_number: string;

  @Field()
  block_number_minted: string;

  @Field()
  token_hash: string;

  @Field()
  contract_type: string;

  @Field()
  name: string;

  @Field()
  symbol: string;

  @Field()
  token_uri: string;

  @Field()
  metadata: string;

  @Field({nullable:true, defaultValue: new Date()})
  creation_date: Date;

  @Field({nullable:true, defaultValue: new Date()})
  modification_date: Date;
}
