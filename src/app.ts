import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { MyContract } from "../generated-abi/typechain/web3/MyContract";

async function main(): Promise<void> {
  const abi = ({} as any) as AbiItem;
  const web3 = new Web3();
  const contract = new web3.eth.Contract(abi) as MyContract;

  await contract.methods.isOwner().call();
}

main();
