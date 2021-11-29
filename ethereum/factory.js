import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
import { deployedAddress } from "../secrets";

const instance = new web3.eth.Contract(CampaignFactory.abi, deployedAddress);

export default instance;
