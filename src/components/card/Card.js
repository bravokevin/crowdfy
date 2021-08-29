import {
    CardContainer,
    CardWrapper,
    CardImg,
    CardTextContainer,
    CardTopline,
    CardTittle,
    CardDescription,
    CardFounds,
    ImgContainer
} from './Card.styles'


const Card = ({ campaignImage, campaignName, fundingGoal, deadline, fundingCap, shortDescription, _id }) => {
    return (
        <CardContainer>
            <CardWrapper to={`/campaign/${_id}`}>
                <ImgContainer>
                    <CardImg src={`https://ipfs.infura.io/ipfs/${campaignImage}`} />
                </ImgContainer>
                <CardTextContainer>
                    <CardTopline>deadline: {deadline}</CardTopline>
                    <CardTittle>{campaignName}</CardTittle>
                    <CardDescription>{shortDescription}</CardDescription>
                </CardTextContainer>
                <CardFounds>Collected:</CardFounds>
            </CardWrapper>
        </CardContainer>
    )
}

export default Card