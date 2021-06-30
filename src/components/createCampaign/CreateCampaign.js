import React, { useState } from 'react'
import { Button } from '../Buttons'

import {
  Container,
  Wrapper,
  FormContent,
  FormImage,
  ImageWrapper,
  FormInputImage,
  Form,
  FormShortsFields,
  ShortFieldsWrapper,
  FormLabel,
  FormInput,
  FormLargeFields,
  LargerFieldsWrapper,
  TextArea,
  TextDescription,
  TextTittle,
  TopLine
} from './CreateCampaign.styles'




export const CreateCampaign = ({ CampaignFields }) => {

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
                {CampaignFields.map(({ label, type, autoFocus }) => (
                  <>
                <FormLabel >{label}</FormLabel>
                <FormInput type={type} autoFocus={autoFocus} />
                </>
                ))}
                {/* <input type="image"> */}

              </ShortFieldsWrapper>

            </FormShortsFields>

            <FormLargeFields>

              <LargerFieldsWrapper>
                <TextTittle placeholder="Tittle" type="text" maxLength="60" />
                <TextDescription placeholder="Short Description" type="text" maxLength="220" />
                <TextArea placeholder="Write your history" type="text" />
              </LargerFieldsWrapper>

            </FormLargeFields>

            <Button type="submit" > Submit Campaign</Button>
          </Form>
        </FormContent>

      </Wrapper>
    </Container>
  )
}
