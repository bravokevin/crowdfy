import { utils } from 'web3'

export default function validation(value) {
    const errors = {};

    if (!value.campaignName.trim()) {
        errors.campaignName = "Campaign Name required";
    }

    if (!value.beneficiary) {
        errors.beneficiary = "Beneficiary address required"
    }
    else if (!utils.isAddress(value.beneficiary)) {
        errors.beneficiary = "Beneficiary address is invalid"
    }

    return errors;
}