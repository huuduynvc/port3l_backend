import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ethers } from 'ethers';

const INFURA_ID = '82539309d63a4faeb72cb4543fb9f8a8'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

// const ERC721_ABI = [
//   "function balanceOf(address _owner) external view returns (uint256)",
//   "function ownerOf(uint256 _tokenId) external view returns (address)",
//   "function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable",
//   "function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable",
//   "function transferFrom(address _from, address _to, uint256 _tokenId) external payable",
//   "function approve(address _approved, uint256 _tokenId) external payable",
//   "function setApprovalForAll(address _operator, bool _approved) external",
//   "function getApproved(uint256 _tokenId) external view returns (address)",
//   "function isApprovedForAll(address _owner, address _operator) external view returns (bool)",
//   "event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId)",
//   "event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId)",
//   "event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved)"
// ];

// const address = '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85'
// const contract = new ethers.Contract(address, ERC721_ABI, provider)


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): string {
    //const balance = await provider.getBalance(address);
    //console.log(balance);
    //console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`);

    // const totalSupply = await contract.totalSupply()

    //console.log(`\nReading from ${address}\n`)
    // console.log(`Total Supply: ${totalSupply}\n`)

    //const balance = await contract.balanceOf('0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85')
    //console.log(balance);

    //console.log(`Balance Returned: ${balance}`)
    //console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`)

    return this.appService.getHello();
  }

}
