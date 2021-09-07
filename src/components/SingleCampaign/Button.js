import ReactCircleModal from 'react-circle-modal'
import { NButton } from "../Buttons"
import { FormLabelPop, FormInput, FormShortsFieldsPop } from '../createCampaign/CreateCampaign.styles';

import { getRefound, withdraw, makeContribution } from '../../contractFunctions';


export const Button = ({handleChange, getPercentage, account, contract, amount, beneficiary, deadline}) => {

    const compareAddress = () => {
        if (account.toString().toLowerCase() === beneficiary.toString().toLowerCase()) return true
        else return false
    }

    const compareDates = () => {
        if (Date.parse(deadline) < Date.parse(new Date())) return true
        else return false
    }

    if (compareDates() && getPercentage() > 30) {
        return <NButton primary={true} onClick={async () => { await getRefound(account, contract) }}>Get a refound</NButton>
    }

    else if (Number(getPercentage()) >= 100 && compareAddress()) {
        return (
            <NButton primary={true} onClick={async () => { await withdraw(account, contract) }}>Withdraw</NButton>
        )
    }

    else if (!compareDates() && getPercentage() < 100) {
        return (
            <ReactCircleModal
                backgroundColor='rgba(255, 0, 238, 0.48)'
                toogleComponent={onClick => (
                    <NButton primary={true} onClick={onClick}>Contribute</NButton>
                )}
            >
                {(onClick) => (
                    <FormShortsFieldsPop onClick={onClick}>
                        <FormLabelPop>Amount to contribute</FormLabelPop>
                        <FormInput onChange={handleChange.bind(this)} onClick="none" type='number'></FormInput>
                        <NButton primary={true} onClick={async () => {
                            makeContribution(account, contract, amount).then(() => {
                                onClick()
                            })
                        }}>Found campaign</NButton>
                    </FormShortsFieldsPop>
                )}
            </ReactCircleModal>
        )

    }
}