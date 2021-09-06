import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { NButton } from '../Buttons';
import ReactCircleModal from 'react-circle-modal'
import { getCampaignById } from '../../dbUtils';

import { FormLabelPop, FormInput, FormShortsFieldsPop } from '../createCampaign/CreateCampaign.styles';

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
import { getRefound, withdraw, makeContribution } from '../../contractFunctions';

export const SingleCampaign = (props) => {

  const [values, setValues] = useState({});
  const [contract, setContract] = useState();
  const [amount, setAmount] = useState();

  let params = useParams();

  useEffect(() => {

    try {
      getCampaignById(params.id.toString()).then((campaignValues) => {
        setValues(campaignValues);
        loadCrowdfyInstance(campaignValues.campaignAddress)
          .then((instance) => {
            setContract(instance)

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

  const compareDates = () => {
    if (Date.parse(values.deadline) < Date.parse(new Date())) return true
    else return false
  }


  const compareAddress = () => {
    if (props.account.toString().toLowerCase() === values.beneficiary.toString().toLowerCase()) return true
    else return false
  }



  const buttons = () => {
    if (compareDates()) {
      if (compareAddress()) {
        return (
          <ButtonWrapper>
            <NButton primary={true} onClick={async () => { await getRefound(props.account, contract) }}>Get a refound</NButton>
            <NButton primary={true} onClick={async () => { await withdraw(props.account, contract) }}>Withdraw</NButton>
          </ButtonWrapper>
        )
      }
      else {
        return <NButton primary={true} onClick={async () => { await getRefound(props.account, contract) }}>Get a refound</NButton>
      }

    } else {

      return (
        <ReactCircleModal
          backgroundColor='#c413dc'
          toogleComponent={onClick => (
            <NButton primary={true} onClick={onClick}>Contribute</NButton>
          )}
        >
          {(onClick) => (
            <FormShortsFieldsPop>
              <FormLabelPop>Amount to contribute</FormLabelPop>
              <FormInput onChange={handleChange.bind(this)} type='number'></FormInput>
              <NButton primary={true} onClick={async () => {
                makeContribution(props.account, contract, amount).then(() => {
                  onClick()
                })
              }}>Found campaign</NButton>
            </FormShortsFieldsPop>
          )}
        </ReactCircleModal>
      )

    }
  }

  const convertDate = (unix) => {
    let date = new Date(unix).toISOString();
    let search = date.indexOf('.')
    date = date.slice(0, search - 3)
    return date

  }


  return (
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
            <ValueField><ProgressBar value='100'>100%</ProgressBar></ValueField>
          </ValuesWrapper>

        </ShortFieldsWrapepr>

        <CampaignWrapper>
          <CampaignTittle>{values.campaignName}</CampaignTittle>
          <CampaignShortDescription>{values.shortDescription}</CampaignShortDescription>
          <CampaignLongDescription >{values.longDescription}</CampaignLongDescription>
          <ButtonWrapper>
            {buttons()}
          </ButtonWrapper>
        </CampaignWrapper>
      </Wrapper>
    </Container>
  )
}

