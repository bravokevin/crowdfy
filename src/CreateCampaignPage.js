import { CreateCampaign } from "./components/createCampaign/CreateCampaign";

const CampaignFields = [
    { label: "campaign name", type: "text", autoFocus: true},
    { label: "funding goal", type: "number"},
    { label: "deadline", type: "date"},
    { label: "funding cap", type: "number"},
    { label: "beneficiary", type: "text", finish:3, start:1 }
]

export const CreateCampaignPage = () => {

    return (
        <>
            <CreateCampaign CampaignFields={CampaignFields} />
        </>
    )
}

export default CreateCampaignPage;