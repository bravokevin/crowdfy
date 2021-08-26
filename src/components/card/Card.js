import React from 'react'

import {
    CardContainer,
    CardArea,
    CardWrapper,
    CardImg,
    CardTextContainer,
    CardTopline,
    CardTittle,
    CardDescription,
    CardFounds,
    ImgContainer
} from './Card.styles'


const Card = ({ campaignImage, campaignName, fundingGoal, deadline, fundingCap, shortDescription, longDescription }) => {
    return (
        <CardContainer>
            {/* <CardArea> */}
            <CardWrapper>
                <ImgContainer>
                    <CardImg src={campaignImage} />
                </ImgContainer>
                <CardTextContainer>
                    <CardTopline>deadline: {deadline}</CardTopline>
                    <CardTittle>{campaignName}</CardTittle>
                    <CardDescription>{shortDescription}</CardDescription>
                </CardTextContainer>
                <CardFounds>Collected</CardFounds>

            </CardWrapper>
            {/* </CardArea> */}
        </CardContainer>
    )
}

export default Card