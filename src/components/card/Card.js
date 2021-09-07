import {
    CardContainer,
    CardWrapper,
    CardImg,
    CardTextContainer,
    CardTopline,
    CardTittle,
    CardDescription,
    ImgContainer
} from './Card.styles'


const Card = ({ campaignImage, campaignName, fundingGoal, deadline, fundingCap, shortDescription, _id }) => {

    const compareDates = () => {
        if (Date.parse(deadline) < Date.parse(new Date())) return false
        else return true
    }
    const convertDate = (unix) => {
        let date = new Date(unix).toISOString();
        let search = date.indexOf('.')
        date = date.slice(0, search - 3)
        return date

    }
    return (
        <CardContainer>
            <CardWrapper to={`/campaign/${_id}`}>
                <ImgContainer>
                    <CardImg src={`https://ipfs.infura.io/ipfs/${campaignImage}`} />
                </ImgContainer>
                <CardTextContainer>
                    <CardTopline>{compareDates() ? `deadline: ${convertDate(deadline)}` : "Finalized"}</CardTopline>
                    <CardTittle>{campaignName}</CardTittle>
                    <CardDescription>{shortDescription}</CardDescription>
                </CardTextContainer>
            </CardWrapper>
        </CardContainer>
    )
}

export default Card