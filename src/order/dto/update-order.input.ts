import { CreateOrderInput } from './create-order.input';
import { InputType, Field, Int, PartialType,ID } from '@nestjs/graphql';

@InputType()
export class UpdateOrderInput{
  @Field(() => ID)
  readonly id: string;
  @Field({defaultValue: false})
  readonly is_payment: boolean;
  @Field({ nullable: true, defaultValue: new Date()})
  modification_date: Date;
}
