import React, { useState } from 'react'
import { Button } from '../Buttons'
import {ipfsClient} from 'ipfs-http-client'

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
  TopLine
} from './CreateCampaign.styles'


export const CreateCampaign = ({ CampaignFields }) => {

  const captureFile = (event) => {
    const imagePlace = document.querySelector("#coverImage")
    let file = URL.createObjectURL(event.target.files[0]);
    imagePlace.src = file;
    // const reader = new window.FileReader()
    // reader.readAsArrayBuffer(file)
  }

  const submit =(event) =>{
    event.preventDefault();
    console.log(event.target)
  }

  return (
    <Container>
      <Wrapper>
        <FormContent>
          <ImageWrapper>
            <Image id="coverImage"/>
          </ImageWrapper>
          <Form onSubmit={submit}>
            {/* The image handler */}
            <FormInputImage id="imageInput" type="file" accept="image/*" name="image" onChange={captureFile} />

            <FormImageLabel htmlFor="imageInput">
            <img src="https://img.icons8.com/ios/50/fa314a/add.png" alt="add icon"/>
            </FormImageLabel>

            <TopLine>Your Campain</TopLine>
            <FormShortsFields>
              {/* <ShortFieldsGeneralWrapper> */}
                {CampaignFields.map(({ label, type, autoFocus,start,  finish}) => (
                  <ShortFieldWrapper style={{gridColumnEnd: finish, gridColumnStart:start}} >
                    <FormLabel >{label}</FormLabel>
                    <FormInput type={type} autoFocus={autoFocus} />
                  </ShortFieldWrapper>
                ))}
              {/* </ShortFieldsGeneralWrapper> */}

            </FormShortsFields>

            <FormLargeFields>

              <LargerFieldsWrapper>
                <TextTittle placeholder="Tittle" type="text" maxLength="60" />
                <TextDescription placeholder="Short Description" type="text" maxLength="220" />
                <TextArea placeholder="Write your history" type="text" />
              </LargerFieldsWrapper>

            </FormLargeFields>

            <Button type="submit"> Submit Campaign</Button>
          </Form>
        </FormContent>

      </Wrapper>
    </Container>
  )
}
