import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
// import { deployedAddress } from "../secrets";

const deployedAddress = "0x1C8179d41A690aD991B8C0A23357519C57742D59";

const instance = new web3.eth.Contract(CampaignFactory.abi, deployedAddress);

export default instance;
