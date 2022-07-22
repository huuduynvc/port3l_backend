// import { Controller, Get , Post, Body, Param } from '@nestjs/common';
// import { UserService } from './user.service';

// @Controller('user')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post('/nativebalance')
//   async getNativeBalances(
//     @Body('address') address: string,
//     @Body('chain') chain: string,
//   ){
//     const nativebalances = await this.userService.getNativeBalance(address,chain);
//     console.log(nativebalances);
//     return nativebalances;
//   }

//   @Post('/balances')
//   async getBalances(
//     @Body('address') address: string,
//     @Body('chain') chain: string,
//   ){
//     const balances = await this.userService.getBalances(address,chain);
//     console.log(balances);
//     return balances;
//   }

//   @Post('/nfts')
//   async getERC721(
//     @Body('address') address: string,
//     @Body('chain') chain: string,) {
//     const nfts =  await this.userService.getERC721(address,chain);
//     console.log(nfts);
//     return nfts;
//   }
// } 