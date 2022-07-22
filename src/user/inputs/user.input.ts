import { ObjectType, InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly address: string;
  @Field()
  readonly chain: string;
}
