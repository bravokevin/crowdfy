import React from 'react'
import { Button } from '../Buttons'

const CampaignFields = ["campaign name", "funding goal", "deadline", "funding cap", "beneficiary"]

export const CreateCampaign = () => {
  return (
    <Container>
      <Wrapper>

        <FormContent>

          <FormImage>
            <ImageWrapper>
              <FormInputImage type="img" />
            </ImageWrapper>
          </FormImage>

          <Form>
            <FormShortsFields>
              <ShortFieldsWrapper>
                <FormLabel>Campaign Name</FormLabel>
                <FormInput type="text" />
              </ShortFieldsWrapper>

            </FormShortsFields>

            <FormLargeFields>

              <LargerFieldsWrapper>
                <TextTittle>My title</TextTittle>
                <TextDescription>MY description</TextDescription>
                <TextArea></TextArea>
              </LargerFieldsWrapper>

            </FormLargeFields>

            <Button type="submit"> Create Campaign</Button>
          </Form>
        </FormContent>

      </Wrapper>
    </Container>
  )
}
