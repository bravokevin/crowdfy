import React, { useState } from 'react'
import { NButton } from '../Buttons'
import { SingleCampaign } from '../SingleCampaign/SingleCampaign'

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
  ButtonWrapper, 
  Error
} from './CreateCampaign.styles'


export const CreateCampaign = ({ CampaignFields, handleChange, values, submit, captureFile, isSubmiting}) => {


  return (
    <Container>
      <Wrapper>
        <FormContent>
          <ImageWrapper>
            <Image id="coverImage" />
          </ImageWrapper>
          <Form onSubmit={submit} method='POST' action=''>
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

            <TopLine id='campaignTittle'>My campaign</TopLine>
            <FormShortsFields>
              {/* <ShortFieldsGeneralWrapper> */}
              {CampaignFields.map(({ label, type, autoFocus, start, finish, value, placeholder, minimum, customError, name}) => (
                <ShortFieldWrapper style={{ gridColumnEnd: finish, gridColumnStart: start }} >
                  <FormLabel >{label}</FormLabel>

                  {/* sets min value to the date input only */}
                  { type === 'datetime-local'  ?
                  <FormInput
                  type={type}
                  autoFocus={autoFocus}
                  onChange={handleChange(label)}
                  value={value}
                  placeholder={placeholder}
                  // required
                  min={minimum()}
                  />  
                  :
                  <FormInput
                    type={type}
                    autoFocus={autoFocus}
                    onChange={handleChange(name)}
                    value={value}
                    placeholder={placeholder}
                    // required
                  />
                  }
                  {/* if there is a custom error shows up */}
                  {customError && <Error>{customError}</Error>}

                </ShortFieldWrapper>
              ))}
              {/* </ShortFieldsGeneralWrapper> */}

            </FormShortsFields>

            <FormLargeFields>

              <LargerFieldsWrapper>
                {/* <TextTittle placeholder="Tittle" type="text" maxLength="60" id='text' readOnly/> */}

                <TextDescription onChange={handleChange("shortDescription")} value={values.shortDescription} placeholder="Short Description" type="text" maxLength="220"
                />

                <TextArea placeholder="Write your history" type="text"
                  onChange={handleChange("longDescription")}
                  value={values.longDescription}
                />
              </LargerFieldsWrapper>

            </FormLargeFields>
            <ButtonWrapper>
              <NButton primary={true} type="submit" disabled={isSubmiting}>Submit Campaign</NButton>
            </ButtonWrapper>
          </Form>
        </FormContent>

      </Wrapper>

    </Container>
  )
}
