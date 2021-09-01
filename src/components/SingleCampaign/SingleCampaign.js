import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { NButton } from '../Buttons';

import { getCampaignById } from '../../dbUtils';

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
  ButtonWrapper
} from './SingleCampaign.styles';

export const SingleCampaign = (props) => {

  const [values, setValues] = useState({});
  let params = useParams();

  useEffect(() => {
    const mount = async () => {
      try{
        const campaignValues = await getCampaignById(params.id.toString())
        setValues(campaignValues);
      }
      catch(error){
        alert(error)
      }

    }
    mount()
  }, [])

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
            <NButton primary={true}>Get a refound</NButton>
            <NButton primary={true}>Withdraw</NButton>
          </ButtonWrapper>
        )
      }
      else {
        return <NButton primary={true}>Get a refound</NButton>
      }

    } else { return <NButton primary={true}>Found campaign</NButton> }

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
          <CampaignImage src={`https://ipfs.infura.io/ipfs/${values.campaignImage}`} />
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
            <ValueField>pepeito</ValueField>
          </ValuesWrapper>

        </ShortFieldsWrapepr>

        <CampaignWrapper>
          <CampaignTittle>{values.campaignName}</CampaignTittle>
          <CampaignShortDescription>{values.shortDescription}</CampaignShortDescription>
          <CampaignLongDescription>{values.longDescription}</CampaignLongDescription>
          <ButtonWrapper>
           { buttons()}
          </ButtonWrapper>
        </CampaignWrapper>
      </Wrapper>
    </Container>
  )
}

