import { useState } from 'react';
import { create } from 'ipfs-http-client'

import { createEntry } from './dbUtils';
import { CreateCampaign } from "./components/createCampaign/CreateCampaign";
import customValidation from "./components/createCampaign/validation";



export const CreateCampaignPage = ({ sendData }) => {

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
        longDescription: '',
        campaignAddress: ''
    })

    const falseAddress = "0x00000000000000000000000000000000000000000"

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

    /**
     * sets the file to the cover image 
     * convert the file to buffer to store it in IPFS
     * sets the resulting IPFS hash to the 'campaignImage' value    
     */
    const captureFile = async (event) => {
        //put the image in the cover 
        const imagePlace = document.querySelector("#coverImage")
        const file = event.target.files[0]
        imagePlace.src = URL.createObjectURL(file);

        // convert the image to a buffer to store in IPFS
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file)
        reader.onloadend = async () => {
            const cid = await ipfs.add(Buffer(reader.result));
            const imageHash = cid.path.toString()
            const { name } = event.target
            setValue({
                ...values,
                [name]: imageHash
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

        /**
         * TODO: 
         * update the schema to add the campaign field
         * 'create the instance of the contract'
        *   store the address of the instaciated contract in the thread'
        * */

        // const campaignss = await getCampaignByName(values.campaignName);

        // await collectionFromSchema() NOTE : LA COLECCTION YA ESTA CREADA

        console.log("**************** Creating and store Instance ****************")

        await createEntry(values);

        console.log("**************** Instance Created ****************")

        //send data to the parent
        // sendData(values, cid.path.toString()) 

        //reset all values.
        const imagePlace = document.querySelector("#coverImage")
        imagePlace.src = undefined;
        setValue({
            campaignImage: '',
            campaignName: '',
            fundingGoal: 0,
            deadline: '',
            fundingCap: 0,
            beneficiary: '',
            shortDescription: '',
            longDescription: '',
            campaignAddress: ''
        })
        setTopTittle("campaignName", "My campaign");

        // se le envia informacion al contrato

        setIsSubmiting(false);
        // TODO: guardar el hash en el contrato
    }

    // example hash QmRGbN95yyHdP3TcWzMdgZhrEhVVKUGELWNrKwCg8nx8qW
    // example direction https://ipfs.infura.io/ipfs/QmNd3VfSULv5okJktefxAUNR9DhsthBFjAeaqHFWyMyrfa
    const {
        campaignName,
        fundingGoal,
        deadline,
        fundingCap,
        beneficiary
    } = values

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