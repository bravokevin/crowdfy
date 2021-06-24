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

const Card = () => {
    return (
        <CardContainer>
            {/* <CardArea> */}
                <CardWrapper>
                    <ImgContainer>
                        <CardImg />
                    </ImgContainer>
                    <CardTextContainer>
                        <CardTopline>TopLine</CardTopline>
                        <CardTittle> Tittle</CardTittle>
                        <CardDescription>Description</CardDescription>
                        <CardFounds>Founds</CardFounds>
                    </CardTextContainer>
                </CardWrapper>
            {/* </CardArea> */}
        </CardContainer>
    )
}

export default Card