import { utils } from 'web3'

export default function customValidation(value) {
    const errors = {};
    if (!utils.isAddress(value.beneficiary)) {
         errors.beneficiary = "Beneficiary address is invalid"
     }
    return errors;
}