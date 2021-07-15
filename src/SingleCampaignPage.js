import React from 'react'
import { Route } from 'react-router-dom'
import { SingleCampaign } from './components/SingleCampaign/SingleCampaign'

const SingleCampaignPage = ({match}) => {
    return (
        <>
        <Route path='campaign/:campaignId' component={SingleCampaign}/>
        </>
    )
}

export default SingleCampaignPage
