import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { NftInput } from './dto/nft.input';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  // @Field(() => ID)
  // id: string
  
  @Field(()=> [NftInput])
  readonly nfts: NftInput[];

  // @Field()
  // @Prop()
  // token_address: string;

  // @Field()
  // @Prop()
  // token_id: string;

  // @Field()
  // @Prop()
  // owner_of: string;

  // @Field()
  // @Prop()
  // block_number: string;

  // @Field()
  // @Prop()
  // block_number_minted: string;

  // @Field()
  // @Prop()
  // token_hash: string;

  // @Field()
  // @Prop()
  // contract_type: string;

  // @Field()
  // @Prop()
  // name: string;

  // @Field()
  // @Prop()
  // symbol: string;

  // @Field()
  // @Prop()
  // token_uri: string;

  // @Field()
  // @Prop()
  // metadata: string;
}

export const UserSchema = SchemaFactory.createForClass(User);