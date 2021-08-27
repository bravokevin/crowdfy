import { Component } from 'react'
import Card from './components/card/Card'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import { CardArea } from './components/card/Card.styles'
import { getAllCampaigns } from './dbUtils'
import { SingleCampaign } from './components/SingleCampaign/SingleCampaign';

class Campaigns extends Component {

    async componentDidMount() {
        await this.getCampaigns();
    }

    getCampaigns = async () => {
        const campaigns = await getAllCampaigns()
        this.setState({
            campaigns
        })
    }
    constructor(props) {
        super(props)
        this.state = {
            campaigns: []
        }
    }

    render() {
        return (
            <CardArea>
                {this.state.campaigns.map((campaign) => (
                    <Card key={campaign._id} {...campaign} />
                ))}
            </CardArea >
        )
    }
}

export default Campaigns