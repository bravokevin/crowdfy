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

    const compareDates = () => {
        if (Date.parse(deadline) < Date.parse(new Date())) return false
        else return true
    }
    return (
        <CardContainer>
            <CardWrapper to={`/campaign/${_id}`}>
                <ImgContainer>
                    <CardImg src={`https://ipfs.infura.io/ipfs/${campaignImage}`} />
                </ImgContainer>
                <CardTextContainer>
                    <CardTopline>{compareDates() ? `deadline: ${deadline}` : "Finalized"}</CardTopline>
                    <CardTittle>{campaignName}</CardTittle>
                    <CardDescription>{shortDescription}</CardDescription>
                </CardTextContainer>
                <CardFounds>Collected:</CardFounds>
            </CardWrapper>
        </CardContainer>
    )
}

export default Card