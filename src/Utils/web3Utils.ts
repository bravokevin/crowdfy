import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import CrowdfyFabric from "../contracts/CrowdfyFabric.json"
import Crowdfy from '../contracts/Crowdfy.json'


const FabricABI = CrowdfyFabric.abi; //the actual ABI of the Fabric Contract
const CrowdfyABI = Crowdfy.abi// the actual ABI of the crowdfy Contract
const contactFabricAddress: string = '0x623CC812a8Ace0197E772080b3709D594B5E87CA';

//detects metamask and stores the ethereum wallet
export const addWallet = async () => {

  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      // await window.ethereum.enable();

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      return accounts[0];
    }
    catch (ee) { }
  }
  else {
    window.alert('Non-ehtereum browser detected. Try instaling metamask')
  }
}

export const handleAccountsChanged = async (currentAccount?: string): Promise<string> => {
  const accounts = await ethereum.request({ method: 'eth_accounts' });
  if (accounts.length === 0) {
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    return accounts[0];
  }
}


//conects the factory contract and detcts the id of the current network
export const loadBlockchainData = async () => {

  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    const web3 = window.web3
    // detecting network id
    const networkId = await web3.eth.net.getId()
    const networkData: AbiItem = CrowdfyFabric.networks[networkId]
    if (networkData) {
      const FabricContract = new web3.eth.Contract(FabricABI, contactFabricAddress);
      return FabricContract
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }

  }
  else {
    window.alert('Non-ehtereum browser detected. Try instaling metamask')
  }
}

/**
 * 
 * @param instanceAddress the address of the crowdfy instance that we are going to connect
 * @returns return the contract to interact with
 */
export const loadCrowdfyInstance = async (instanceAddress: string) => {
  window.web3 = new Web3(window.ethereum);
  const web3 = window.web3

  const crowdfyInstance = new web3.eth.Contract(CrowdfyABI, instanceAddress);
  return crowdfyInstance



}