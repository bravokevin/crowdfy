import { CreateCampaign } from "./components/createCampaign/CreateCampaign";
import { useState, useEffect } from 'react';

import useForm from "./components/createCampaign/useForm";

export const CreateCampaignPage = () => {

        ///campaign fields
        const [values, setValue] = useState({
            CampaignImage:'',
            campaignName: '',
            fundingGoal:null ,
            deadline: '',
            fundingCap: null,
            beneficiary: '',
            tittle: '',
            shortDescription: '',
            longDescription: ''
        })

        const handleChange = input => e => {
            const { value } = e.target
            setValue({
                ...values,
                [input]: value
            })
        }
    
        const captureFile = (event) => {
            const imagePlace = document.querySelector("#coverImage")
            let file = event.target.files[0]
            imagePlace.src = URL.createObjectURL(file);
            let imageStr = file.toString('base64')
            const { name} = event.target
            let bufferImage = Buffer.from(imageStr, 'base64')
            setValue({
                [name]: bufferImage
            })
        }
    
        const submit = (event) => {
            event.preventDefault();   
        }

    // const { handleChange, captureFile, submit} = useForm();

    const {
        CampaignImage,
        campaignName,
        fundingGoal,
        deadline,
        fundingCap,
        beneficiary,
        tittle,
        shortDescription,
        longDescription
    } = values

    const falseAddress = "0x00000000000000000000000000000000000000000"

    const CampaignFields = [
        { label: "campaign name", type: "text", autoFocus: true, value: campaignName, placeholder: "My campaign"},
        { label: "funding goal", type: "number", value:fundingGoal, placeholder:"In WEI" },
        { label: "deadline", type: "date", value: deadline },
        { label: "funding cap", type: "number", value:fundingCap, placeholder:"In WEI"  },
        { label: "beneficiary", type: "text", finish: 3, start: 1, value: beneficiary, placeholder: falseAddress }
    ]

    return (
        <>
            <CreateCampaign
                CampaignFields={CampaignFields}
                handleChange={handleChange}
                values={values}
                captureFile={captureFile}
                submit={submit}
            />
        </>
    )
}

export default CreateCampaignPage;