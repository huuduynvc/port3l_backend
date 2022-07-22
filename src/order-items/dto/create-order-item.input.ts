import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderItemInput {
  @Field()
  readonly order_id: string;
  @Field()
  readonly token_address: string;
  @Field()
  readonly token_id: string;
  @Field()
  readonly owner_of: string;
  @Field()
  readonly block_number: string;
  @Field()
  readonly block_number_minted: string;
  @Field()
  readonly token_hash: string;
  @Field()
  readonly contract_type: string;
  @Field()
  readonly name: string;
  @Field()
  readonly symbol: string;
  @Field()
  readonly token_uri: string;
  @Field()
  readonly metadata: string;
}
