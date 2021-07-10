import React from 'react'

import {Container, Wrapper, CampaignImageWrapper, CampaignImage} from './SingleCampaign.styles';

export const SingleCampaign = () => {
  return (
    <Container>
      <Wrapper>
        <CampaignImageWrapper>
          <CampaignImage/>
        </CampaignImageWrapper>
        {/* <CampaignWrapper>
          <CampaignTittle></CampaignTittle>
          <CampaignShortDescription></CampaignShortDescription>
          <CampaignLongDescription></CampaignLongDescription>

        </CampaignWrapper> */}
      </Wrapper>
    </Container>

  )
}
