import React, { useState } from 'react'
import { NButton } from '../Buttons'
import { ipfsClient } from 'ipfs-http-client'

import {
  Container,
  Wrapper,
  FormContent,
  ShortFieldsGeneralWrapper,
  ImageWrapper,
  FormInputImage,
  Form,
  FormShortsFields,
  ShortFieldWrapper,
  FormLabel,
  Image,
  FormInput,
  FormLargeFields,
  LargerFieldsWrapper,
  TextArea,
  TextDescription,
  TextTittle,
  FormImageLabel,
  TopLine,
  ButtonWrapper
} from './CreateCampaign.styles'


export const CreateCampaign = ({ CampaignFields, handleChange, values, submit, captureFile }) => {

  return (
    <Container>
      <Wrapper>
        <FormContent>
          <ImageWrapper>
            <Image id="coverImage" />
          </ImageWrapper>
          <Form onSubmit={submit}>
            {/* The image handler */}
            <FormInputImage
              id="imageInput"
              type="file"
              accept="image/*"
              name="campaignImage"
              onChange={captureFile}
              defaultValue={values.campaignImage}
            />

            <FormImageLabel htmlFor="imageInput">
              <img src="https://img.icons8.com/ios/50/fa314a/add.png" alt="add icon" />
            </FormImageLabel>

            <TopLine>Your Campain</TopLine>
            <FormShortsFields>
              {/* <ShortFieldsGeneralWrapper> */}
              {CampaignFields.map(({ label, type, autoFocus, start, finish, value, placeholder }) => (
                <ShortFieldWrapper style={{ gridColumnEnd: finish, gridColumnStart: start }} >
                  <FormLabel >{label}</FormLabel>
                  <FormInput
                    type={type}
                    autoFocus={autoFocus}
                    onChange={handleChange(label)}
                    defaultValue={value}
                    placeholder={placeholder}
                  />
                </ShortFieldWrapper>
              ))}
              {/* </ShortFieldsGeneralWrapper> */}

            </FormShortsFields>

            <FormLargeFields>

              <LargerFieldsWrapper>
                <TextTittle placeholder="Tittle" type="text" maxLength="60" />

                <TextDescription onChange={handleChange("shortDescription")} defaultValue={values.shortDescription} placeholder="Short Description" type="text" maxLength="220"
                />

                <TextArea placeholder="Write your history" type="text"
                  onChange={handleChange("longDescription")}
                  defaultValue={values.longDescription}
                />
              </LargerFieldsWrapper>

            </FormLargeFields>
            <ButtonWrapper>
              <NButton primary={true}type="submit"> Submit Campaign</NButton>
            </ButtonWrapper>
          </Form>
        </FormContent>

      </Wrapper>
    </Container>
  )
}
