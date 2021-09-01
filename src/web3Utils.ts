import Web3 from 'web3';

// const FabricABI = CrowdfyFabric.abi; //the actual ABI of the Fabric Contract
// const CrowdfyABI; // the actual ABI of the crowdfy Contract
// const contactFabricAddress = '';

//detects metamask and stores the ethereum wallet
export const addWallet = async () => {
    if (window.ethereum) {

        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable();

        const accounts = await ethereum.request({ method: 'eth_accounts' });
        return accounts[0];
    }

    else {
        window.alert('Non-ehtereum browser detected. Try instaling metamask')
    }

}

//conects the factory contract and detcts the id of the current network
export const loadBlockchainData = async () => {
    const web3 = window.web3

    // detecting network id
    const networkId = await web3.eth.net.getId()
    const networkData = CrowdfyFabric.networks[networkId]

    if (networkData === networkId) {
        const FabricContract = web3.eth.Contract(FabricABI, networkData.address);
        return FabricContract
    } else {
        window.alert('Smart contract not deployed to detected network, please change to the rinkenby Network')
    }
}



/**
 * 
 * @param instanceAddress the address of the crowdfy instance that we are going to connect
 * @returns return the contract to interact with
 */
export const loadCrowdfyInstance = async (instanceAddress: string) => {

    const web3 = window.web3

    // detecting network id
    const networkId = await web3.eth.net.getId()
    const networkData = Crowdfy.networks[networkId]

    if (networkData === networkId) {
        const crowdfyInstance = web3.eth.Contract(CrowdfyABI, instanceAddress);
        return crowdfyInstance
    } else {
        window.alert('Smart contract not deployed to detected network, please change to the rinkenby Network')
    }

}