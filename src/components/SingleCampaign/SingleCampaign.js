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
    const mount = async () =>{
      const campaignValues = await getCampaignById(params.id.toString())
      setValues(campaignValues);
      console.log('se cargo')
    }
    mount()
  }, [])



  return (
    <Container>
      <Wrapper>
        <CampaignImageWrapper>
          <CampaignImage src={`https://ipfs.infura.io/ipfs/${values.campaignImage}`} />
        </CampaignImageWrapper>

        <ShortFieldsWrapepr>
          <ValuesWrapper style={{flexDirection: 'column', alignItems:'center'}}>
            <Field >Beneficiary</Field>
            <ValueField style={{fontSize:'12px'}}>{values.beneficiary}</ValueField>
          </ValuesWrapper>
          <ValuesWrapper>
            <Field>Funding Cap</Field>
            <ValueField>{`${values.fundingCap} ETH`}</ValueField>
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
            <NButton primary={true}>Fund campaign</NButton>
            <NButton primary={true}>Withdraw</NButton>
          </ButtonWrapper>
        </CampaignWrapper>
      </Wrapper>
    </Container>
  )
}

