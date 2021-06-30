import React, { useState } from 'react'
import { Button } from '../Buttons'

import { Container, Wrapper, FormContent, FormImage, ImageWrapper, FormInputImage, Form, FormShortsFields, ShortFieldsWrapper, FormLabel, FormInput, FormLargeFields, LargerFieldsWrapper, TextArea, TextDescription, TextTittle, TopLine } from './CreateCampaign.styles'

const CampaignFields = [{label: "campaign name", type: "text"},{label: "funding goal", type: "number"}, {label: "deadline", type: "date"}, {label: "funding cap", type: "number"}, {label: "beneficiary", type: "text"}]


export const CreateCampaign = () => {

  return (
    <Container>
      <Wrapper>

        <FormContent>

          {/* <FormImage> */}
          <ImageWrapper>
            <FormInputImage type="file" accept="image/*" name="image" />
          </ImageWrapper>
          {/* </FormImage> */}

          <Form>
          <TopLine>Your Campain</TopLine>
            <FormShortsFields>
              <ShortFieldsWrapper>
                <FormLabel >Campaign Name</FormLabel>
                <FormInput type="text" autoFocus={true} />
                {/* <input type="image"> */}

              </ShortFieldsWrapper>

            </FormShortsFields>

            <FormLargeFields>

              <LargerFieldsWrapper>
                <TextTittle placeholder="Tittle" type="text" maxLength="60"/>
                <TextDescription placeholder="Short Description" type="text" maxLength="220"/>
                <TextArea placeholder ="Write your history" type="text"/>
              </LargerFieldsWrapper>

            </FormLargeFields>

            <Button type="submit" > Submit Campaign</Button>
          </Form>
        </FormContent>

      </Wrapper>
    </Container>
  )
}
