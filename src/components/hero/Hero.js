import { useState } from 'react';

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './hero.styles'
import { Button } from "../Buttons.js";
const image = require("../../images/bg.jpg")

const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={image.default} />
            </HeroBg>
            <HeroContent>
                <HeroH1> Founds the people that you care about</HeroH1>
                <HeroP>
                    Helps people from all around the world in a descentralize way.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/newCampaign"
                        primary={true}
                        light={true}
                        onMouseEnter={onHover} onMouseLeave={onHover} >
                        Create Campaign
                    </Button>
                    <Button to="/campaigns"
                        primary={false}
                        onMouseEnter={onHover} onMouseLeave={onHover}>
                        Found a campaign
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;