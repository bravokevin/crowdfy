import { useState } from 'react';


import { updateCollection } from './db';

import { createEntry } from './dbUtils';

import { CreateCampaign } from "./components/createCampaign/CreateCampaign";
import customValidation from "./components/createCampaign/validation";


export const CreateCampaignPage = ({ sendData }) => {

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

    //prevent the user submit twice the information
    const [isSubmiting, setIsSubmiting] = useState(false);


    const setTopTittle = (input, value) => {
        const titleS = document.querySelector('#campaignTittle')
        if (input === 'campaignName') {
            titleS.textContent = value || "My campaign"
        }
    }

    const handleChange = input => e => {
        const { value } = e.target

        //sets title to the topline 
        setValue({
            ...values,
            [input]: value
        })

        setTopTittle(input, value);
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

        // if (Object.keys(errors).length > 0) {
        //     alert("check the fields");
        //     return
        // }

        setIsSubmiting(true);


        // const newEntry = await createEntry(values);
        // console.log(newEntry)
        // const campaignss = await getCampaignByName(values.campaignName);

        // await collectionFromSchema() NOTE : LA COLECCTION YA ESTA CREADA

        console.log("**************** Creating and store Instance ****************")

        await createEntry(values);

        console.log("**************** Instance Created ****************")

        //send data to the parent
        // sendData(values, cid.path.toString()) 

        //reset all values.
        setValue({
            campaignImage: '',
            campaignName: '',
            fundingGoal: 0,
            deadline: '',
            fundingCap: 0,
            beneficiary: '',
            shortDescription: '',
            longDescription: ''
        })
        setTopTittle("campaignName", "My campaign");

        // se le envia informacion al contrato

        setIsSubmiting(false);
        // TODO: guardar el hash en el contrato
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
        { label: "campaign name", type: "text", autoFocus: true, value: values.campaignName, placeholder: "My campaign", name: "campaignName" },
        { label: "funding goal", type: "number", value: values.fundingGoal, placeholder: "In Eth", name: "fundingGoal" },
        { label: "deadline", type: "datetime-local", value: deadline, minimum: getDate, name: "deadline" },
        { label: "funding cap", type: "number", value: values.fundingCap, placeholder: "In Eth", customError: errors.fundingCap, name: "fundingCap" },
        { label: "beneficiary", type: "text", finish: 3, start: 1, value: values.beneficiary, placeholder: falseAddress, customError: errors.beneficiary, name: "beneficiary" }
    ]

    return (
        <>
            <CreateCampaign
                CampaignFields={CampaignFields}
                handleChange={handleChange}
                values={values}
                captureFile={captureFile}
                submit={submit}
                isSubmiting={isSubmiting}
            />
            {/* <Route exact path="/post/:id" render={({ match }) => (
                <SingleCampaign values={values} id={(p => p.id === match.params.id)}/> */}
            >
        </>
    )
}

export default CreateCampaignPage;