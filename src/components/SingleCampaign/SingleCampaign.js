import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getCampaignById } from '../../dbUtils';

import { Button } from './Button';

import {
  Container,
  Wrapper,
  CampaignImageWrapper,
  CampaignImage,
  CampaignWrapper,
  CampaignTittle,
  CampaignShortDescription,
  CampaignLongDescription,
  ShortFieldsWrapepr,
  ValuesWrapper,
  Field,
  ValueField,
  ButtonWrapper,
  ProgressBar
} from './SingleCampaign.styles';

import { loadCrowdfyInstance } from '../../web3Utils';

export const SingleCampaign = (props) => {

  const [values, setValues] = useState({});
  const [contract, setContract] = useState();
  const [amount, setAmount] = useState();
  const [contractValues, setContractValues] = useState();

  let params = useParams();
  const destructCampaign = (struct) => {
    const { campaignName, fundingGoal, fundingCap, deadline, beneficiary, owner, created, state, amountRised } = struct;

    return {
      campaignName,
      fundingGoal: Number(fundingGoal),
      fundingCap: Number(fundingCap),
      deadline: Number(deadline),
      beneficiary,
      owner,
      created: Number(created),
      state: Number(state),
      amountRised: Number(amountRised)
    }
  };
  useEffect(() => {

    try {
      getCampaignById(params.id.toString()).then((campaignValues) => {
        setValues(campaignValues);
        loadCrowdfyInstance(campaignValues.campaignAddress)
          .then((instance) => {
            if (instance) {
              instance.methods.theCampaign().call()
                .then((result) => {
                  setContractValues(destructCampaign(result))
                })
              setContract(instance)
            }
            else{
              alert("Please connect your wallet")
            }
          })
      })

    }
    catch (error) {
      alert(error)
    }


  }, [])

  const handleChange = e => {
    setAmount(e.target.value)
  }

  const getPercentage = () => {
    const percentage = (contractValues.amountRised / contractValues.fundingCap) * 100
    console.log(contractValues.amountRised)
    console.log(contractValues.fundingCap)
    console.log(percentage)

    return String(percentage);
  }

  const convertDate = (unix) => {
    let date = new Date(unix).toISOString();
    let search = date.indexOf('.')
    date = date.slice(0, search - 3)
    return date

  }

  return (
    contractValues ?
      <Container>
        <Wrapper>
          <CampaignImageWrapper>
            <CampaignImage src={values.campaignImage ? `https://ipfs.infura.io/ipfs/${values.campaignImage}` : 'none'} />
          </CampaignImageWrapper>

          <ShortFieldsWrapepr>
            <ValuesWrapper style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Field >Beneficiary</Field>
              <ValueField style={{ fontSize: '12px' }}>{values.beneficiary}</ValueField>
            </ValuesWrapper>
            <ValuesWrapper>
              <Field>Funding Cap</Field>
              <ValueField>{`${values.fundingCap} ETH`}</ValueField>
            </ValuesWrapper>
            <ValuesWrapper>
              <Field>Deadline</Field>
              <ValueField>{values.deadline ? convertDate(values.deadline) : ''}</ValueField>
            </ValuesWrapper>
            <ValuesWrapper>
              <Field>Collected</Field>
              <ValueField><ProgressBar max='100' value={contractValues ? getPercentage() : '0'} /></ValueField>
            </ValuesWrapper>

          </ShortFieldsWrapepr>

          <CampaignWrapper>
            <CampaignTittle>{values.campaignName}</CampaignTittle>
            <CampaignShortDescription>{values.shortDescription}</CampaignShortDescription>
            <CampaignLongDescription >{values.longDescription}</CampaignLongDescription>
            <ButtonWrapper>
              <Button handleChange={handleChange}
                getPercentage={getPercentage}
                account={props.account}
                contract={contract}
                amount={amount}
                beneficiary={values.beneficiary}
                deadline={values.deadline} />
            </ButtonWrapper>
          </CampaignWrapper>
        </Wrapper>
      </Container>
      :
      <Container>
        <Wrapper >
          <p style={{margin: 'auto', color: 'white'}}>"Plesae connect metamask"</p>
        </Wrapper>
      </Container>
  )
}

