import { Button } from '../Buttons';

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

export const SingleCampaignCreated = ({location: 
  { state: 
    { campaignName, 
      campaignImage, 
      beneficiary, 
      deadline, 
      shortDescription, 
      longDescription, 
      fundingCap, 
      fundingGoal } 
  } 
}) => {

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
          <CampaignImage src={campaignImage ? `https://ipfs.infura.io/ipfs/${campaignImage}` : 'none'} />
        </CampaignImageWrapper>
        <ShortFieldsWrapepr style ={{    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr'}}>
          <ValuesWrapper style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Field >Beneficiary</Field>
            <ValueField style={{ fontSize: '12px' }}>{beneficiary}</ValueField>
          </ValuesWrapper>
          <ValuesWrapper>
            <Field>FundingGoal</Field>
            <ValueField>{`${fundingGoal} ETH`}</ValueField>
          </ValuesWrapper>
          <ValuesWrapper>
            <Field>Funding Cap</Field>
            <ValueField>{`${fundingCap} ETH`}</ValueField>
          </ValuesWrapper>
          <ValuesWrapper>
            <Field>Deadline</Field>
            <ValueField>{convertDate(deadline)}</ValueField>
          </ValuesWrapper>
        </ShortFieldsWrapepr>

        <CampaignWrapper>
          <CampaignTittle>{campaignName}</CampaignTittle>
          <CampaignShortDescription>{shortDescription}</CampaignShortDescription>
          <CampaignLongDescription >{longDescription}</CampaignLongDescription>
          <ButtonWrapper>
            <Button primary={true} to="/campaigns">See all campaigns</Button>
          </ButtonWrapper>
        </CampaignWrapper>
      </Wrapper>
    </Container>
  )
}

