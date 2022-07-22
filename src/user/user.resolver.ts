import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { NftInput } from './dto/nft.input';
import { UserInput } from './inputs/user.input';
import { User } from './user.schema';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  hello() {
    return 'hello';
  }

  // @Mutation(() => CreateOrderInput)
  // async createOrder(@Args('order') createOrderInput: OrderInput){
  //   return this.orderService.create(createOrderInput);
  // }

  // @Mutation(() => CreateOrderInput)
  // async updateOrder(@Args('order') updateOrderInput: UpdateOrderInput) {
  //   return this.orderService.update(updateOrderInput);
  // }
  

  @Query(() => User)
  async getNfts(@Args('account') account: UserInput) {
    return await this.userService.getERC721(account.address,account.chain);
  }
  
}
