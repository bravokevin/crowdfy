import { CreateCampaign } from "./components/createCampaign/CreateCampaign";
import { useState, useEffect } from 'react';

import useForm from "./components/createCampaign/useForm";

import customValidation from "./components/createCampaign/validation";

export const CreateCampaignPage = () => {

        ///campaign fields
        const [values, setValue] = useState({
            campaignImage:'',
            campaignName: '',
            fundingGoal:null ,
            deadline: '',
            fundingCap: null,
            beneficiary: '',
            tittle: '',
            shortDescription: '',
            longDescription: ''
        })

        const [errors, setErrors] = useState({})

        const handleChange = input => e => {
            const { value} = e.target
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
            const {name} = event.target
            let bufferImage = Buffer.from(imageStr, 'base64')
            setValue({
                    ...values, 
                [name]: bufferImage
            })
        }
    
        const submit = (event) => {
            event.preventDefault(); 
            setErrors(customValidation(values));
            console.log(values)
        }


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

    const getDate = ()=>{
        let date = new Date().toISOString();
        let search = date.indexOf('.')
        date = date.slice(0, search-3)
        return date
      }


    const CampaignFields = [
        { label: "campaign name", type: "text", autoFocus: true, value: campaignName, placeholder: "My campaign", name:"campaignName"},
        { label: "funding goal", type: "number", value:fundingGoal, placeholder:"In WEI", name:"fundingGoal"},
        { label: "deadline", type: "datetime-local", value: deadline, minimum: getDate, name:"deadline"},
        { label: "funding cap", type: "number", value:fundingCap, placeholder:"In WEI", customError: errors.fundingCap, name:"fundingCap"},
        { label: "beneficiary", type: "text", finish: 3, start: 1, value: beneficiary, placeholder: falseAddress, customError: errors.beneficiary, name:"beneficiary"}
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