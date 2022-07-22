import { Injectable } from '@nestjs/common';
import { NftInput } from './dto/nft.input';
import { User } from './user.schema';
const Moralis = require("moralis/node");

async function MoralisStart() {
    /* Moralis init code */
    const serverUrl = "https://ru3jy8k1jhzc.usemoralis.com:2053/server";
    const appId = "D7FdWMb4SoqPJm5YGlwnz0j3JWPLwDMPZn5A1iQ8";
    const masterKey = "EjZaJDfWm443p57BtaIOKsUWZVnhopHE0k8cRRpt";

    await Moralis.start({ serverUrl, appId, masterKey });
}

MoralisStart();

@Injectable()
export class UserService {

    async getNativeBalance(address,chain):Promise<any>{
        const options = {
            chain: chain,
            address: address
        };
        const nativebalance = await Moralis.Web3API.account.getNativeBalance(options);
        console.log(nativebalance);
        return nativebalance;
    }

    async getBalances(address,chain): Promise<any> {
        const options = {
            chain: chain,
            address: address
        };
        const balances = await Moralis.Web3API.account.getTokenBalances(options);
        console.log(balances);
        return balances;
    }

    async getERC721(address,chain): Promise<User> {
        // get NFTs for address
        const options = {
        chain: chain,
        address: address,
        };

        const userEthNFTs = await Moralis.Web3API.account.getNFTs(options);
        console.log(userEthNFTs);
        let user = {
            nfts: userEthNFTs.result
        };
        return user;
    }
}