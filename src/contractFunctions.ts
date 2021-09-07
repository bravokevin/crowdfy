import Web3 from 'web3';
import { Contract } from "web3-eth-contract";

/**
 * 
 * @param campaignName the name of the campaign
 * @param foundingGoal the minimun that the campaign have to achive to be succesfull
 * @param foundingCap the maximum value that the campaign can handle
 * @param deadline the deadline of the campaign
 * @param beneficiary the beneficiary who is going to recive the found of the campaign(if succesfull)
 */
export const createCampaign = async (
    FabricContract: Contract,
    campaignName: string,
    foundingGoal: number,
    deadline: number,
    foundingCap: number,
    beneficiary: string
) => {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    try {
         await FabricContract.methods.createCampaign(
            campaignName,
            foundingGoal,
            deadline,
            foundingCap,
            beneficiary
        ).send({ from: accounts[0] })
        return true
    }
    catch (err) {
        alert(err.message)
        return false
    }

}

/**
 * 
 * @param crowdfyInstance the actual instance of the crowdfy campaign contract
 * @param beneficiary the beneficiary of the campaign 
 * @param actualAddress the actual account of metamask used by the user
 * use to call the wirthdraw method once the campaign was finished succesfull
 * 
 * @dev compares the beneficiary of the campaign and the actual account user => only the beneficiary can call this function
 */
export const withdraw = async (
    actualAddress: string,
    crowdfyInstance: Contract): Promise<void> => {

        try {
            await crowdfyInstance.methods.withdraw().send({ from: actualAddress });
        }
        catch (err) {
            alert(err.message)
        }
}

/**
 * 
 * @param crowdfyInstance the actual instance of the crowdfy contract
 * @param currentAddress the actual account of metamask of the user
 * @returns boolean 
 */
export const getRefound = async (currentAddress: string, crowdfyInstance: Contract) => {
    try {
        await crowdfyInstance.methods.claimFounds().send({
            from: currentAddress
        });
    }
    catch (err) {
        alert(err.message)
        return false
    }
    return true
}


/**
 * 
 * @param crowdfyInstance the actual instance of the crowdfy campaign value
 * @param deadline the deadline of the campaign
 * @param currentAddress the actual account user 
 * @returns boolean
 */
export const makeContribution = async (
    currentAddress: string,
    crowdfyInstance:Contract, 
    value: String) => {
        console.log(currentAddress)
        try {
            await crowdfyInstance.methods.contribute().send({
                from: currentAddress,
                value: Web3.utils.toWei(String(value))
            })
        }
        catch (err) {
            alert(err.message)
        }

}
