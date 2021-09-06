//recordar importar el contrato
import Web3 from 'web3';


const compareDates = (deadline: string) => {
    if (Date.parse(deadline) < Date.parse(new Date().toString())) return true
    else return false
}
const compareAddress = (beneficiaryAddress: string, actualAddress: string) => {
    if (beneficiaryAddress.toString().toLowerCase()
        ===
        actualAddress.toString().toLowerCase()) return true
    else return false
}

/**
 * 
 * @param campaignName the name of the campaign
 * @param foundingGoal the minimun that the campaign have to achive to be succesfull
 * @param foundingCap the maximum value that the campaign can handle
 * @param deadline the deadline of the campaign
 * @param beneficiary the beneficiary who is going to recive the found of the campaign(if succesfull)
 */
export const createCampaign = async (
    FabricContract,
    campaignName: string,
    foundingGoal: number,
    deadline: number,
    foundingCap: number,
    beneficiary: string
) => {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    try {
        const instance = await FabricContract.methods.createCampaign(
            campaignName,
            foundingGoal,
            deadline,
            foundingCap,
            beneficiary
        ).send({ from: accounts[0] })
    }
    catch (err) {
        alert(err)
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
    crowdfyInstance): void => {

        try {
            await crowdfyInstance.methods.withdraw().send({ from: actualAddress });
        }
        catch (err) {
            alert(err)
        }
 

}


/**
 * 
 * @param crowdfyInstance the actual instance of the crowdfy contract
 * @param currentAddress the actual account of metamask of the user
 * @returns boolean 
 */
export const getRefound = async (currentAddress: string, crowdfyInstance) => {
    try {
        await crowdfyInstance.methods.getRefound().send({
            from: currentAddress
        });
    }
    catch (err) {
        alert(err)
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
    crowdfyInstance, 
    value) => {

        try {
            await crowdfyInstance.methods.contribute().send({
                from: currentAddress,
                value: Web3.utils.toWei(String(value))
            })
        }
        catch (err) {
            alert(err)
        }

}
