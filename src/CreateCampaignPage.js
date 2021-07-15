import { useState, useEffect } from 'react';
import {create} from 'ipfs-http-client'


import useForm from "./components/createCampaign/useForm";
import { CreateCampaign } from "./components/createCampaign/CreateCampaign";
import customValidation from "./components/createCampaign/validation";

export const CreateCampaignPage = () => {

    const ipfs = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
    })
    ///campaign fields
    const [values, setValue] = useState({
        campaignImage: '',
        campaignName: '',
        fundingGoal: null,
        deadline: '',
        fundingCap: null,
        beneficiary: '',
        shortDescription: '',
        longDescription: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = input => e => {
        const { value } = e.target

        //sets title to the topline 
        const titleS = document.querySelector('#campaignTittle')
        if (input === 'campaignName') {
            titleS.textContent = value || "My campaign"
        }
        setValue({
            ...values,
            [input]: value
        })
    }

    const captureFile = (event) => {
        //sets the image to the cover
        const imagePlace = document.querySelector("#coverImage")
        const file = event.target.files[0]
        imagePlace.src = URL.createObjectURL(file);

        //convert the image to a buffer
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file)
        const { name } = event.target
        reader.onloadend = () => {
            setValue({
                ...values,
                [name]: Buffer(reader.result)
            })
        }
    }

    const submit = async (event) => {
        event.preventDefault();
        setErrors(customValidation(values));
        const valueObj = JSON.stringify(values)
        console.log('uploading data')
        const cid = await ipfs.add(valueObj);
        console.log(cid)

        // guardar el hash en el contrato
    }

// example hash QmRGbN95yyHdP3TcWzMdgZhrEhVVKUGELWNrKwCg8nx8qW

// example direction https://ipfs.infura.io/ipfs/QmRGbN95yyHdP3TcWzMdgZhrEhVVKUGELWNrKwCg8nx8qW
    const {
        campaignName,
        fundingGoal,
        deadline,
        fundingCap,
        beneficiary
    } = values

    const falseAddress = "0x00000000000000000000000000000000000000000"

    const getDate = () => {
        let date = new Date().toISOString();
        let search = date.indexOf('.')
        date = date.slice(0, search - 3)
        return date
    }


    const CampaignFields = [
        { label: "campaign name", type: "text", autoFocus: true, value: campaignName, placeholder: "My campaign", name: "campaignName" },
        { label: "funding goal", type: "number", value: fundingGoal, placeholder: "In WEI", name: "fundingGoal" },
        { label: "deadline", type: "datetime-local", value: deadline, minimum: getDate, name: "deadline" },
        { label: "funding cap", type: "number", value: fundingCap, placeholder: "In WEI", customError: errors.fundingCap, name: "fundingCap" },
        { label: "beneficiary", type: "text", finish: 3, start: 1, value: beneficiary, placeholder: falseAddress, customError: errors.beneficiary, name: "beneficiary" }
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