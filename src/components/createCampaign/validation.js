import { utils } from 'web3'

export default function customValidation(value) {
    const errors = {};
    if (!utils.isAddress(value.beneficiary)) {
         errors.beneficiary = "Beneficiary address is invalid"
     }

     //cheks if funding cap is major thatn funding goal
     if(value.fundingGoal >= value.fundingCap){
        errors.fundingCap = "Funding cap must be major than funding goal"
     }
    return errors;
}