import { useState, useEffect } from 'react';
import { create } from 'ipfs-http-client'
import { withRouter } from 'react-router';

import { createEntry} from './dbUtils';
import { CreateCampaign } from "./components/createCampaign/CreateCampaign";
import customValidation from "./components/createCampaign/validation";

import { loadBlockchainData } from './web3Utils';
import { createCampaign } from './contractFunctions';


export const CreateCampaignPage = (props) => {
    const [contract, setContract] = useState();



    //the space in where is going to be the covr image
    const imagePlace = document.querySelector("#coverImage")

    const ipfs = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
    })

    ///campaign fields
    const [values, setValue] = useState({
        campaignImage: '',
        campaignName: '',
        fundingGoal: 0,
        deadline: '',
        fundingCap: 0,
        beneficiary: '',
        shortDescription: '',
        longDescription: '',
        campaignAddress: ""
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
        setTopTittle(input, value);
        //sets title to the topline 
        setValue({
            ...values,
            [input]: value
        })
    }

    const addToIPFS = async (input) => {
        try {
            const cid = await ipfs.add(Buffer(input));
            return cid
        }
        catch (error) {
            alert(error)
            return null;
        }
    }

    /**
     * sets the file to the cover image 
     * convert the file to buffer to store it in IPFS
     * sets the resulting IPFS hash to the 'campaignImage' value    
     */
    const captureFile = async (event) => {
        //put the image in the cover 
        const file = event.target.files[0]
        imagePlace.src = URL.createObjectURL(file);

        // convert the image to a buffer to store in IPFS
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file)
        reader.onloadend = async () => {
            //store the image in the ipfs and grab the result
            const cid = await addToIPFS(reader.result)
            //the address in where the image was stored
            const imageHash = cid.path.toString()
            const { name } = event.target
            setValue({
                ...values,
                [name]: imageHash
            })
        }
    }


    const submit = async (event) => {

        contract.events.CampaignCreated({ fromBlock: 'latest', filter: { deadline: values.deadline, beneficiary: values.beneficiary } })
            .on('data', async (event) => {
                const instance = {
                    campaignImage: values.campaignImage,
                    campaignName: values.campaignName,
                    fundingGoal: Number(values.fundingGoal),
                    deadline: Date.parse(values.deadline),
                    fundingCap: Number(values.fundingCap),
                    beneficiary: values.beneficiary,
                    shortDescription: values.shortDescription,
                    longDescription: values.longDescription,
                    campaignAddress: event.returnValues.campaignAddress
                }
                await createEntry(instance);
            })

        event.preventDefault();
        setErrors(customValidation(values));

        // if (Object.keys(errors).length > 0) {
        //     alert("check the fields");
        //     return
        // }
        setIsSubmiting(true);

        const result = await createCampaign(
            contract,
            values.campaignName,
            Number(values.fundingGoal),
            Date.parse(values.deadline),
            Number(values.fundingCap),
            values.beneficiary
        )
        if (result) {
            props.history.push(`/campaignCreated/${values.beneficiary}`, {
                campaignImage: values.campaignImage,
                campaignName: values.campaignName,
                fundingGoal: Number(values.fundingGoal),
                deadline: Date.parse(values.deadline),
                fundingCap: Number(values.fundingCap),
                beneficiary: values.beneficiary,
                shortDescription: values.shortDescription,
                longDescription: values.longDescription
            })
            setIsSubmiting(false);
        }
        else{

        }

    }

    const getDate = () => {
        let date = new Date().toISOString();
        let search = date.indexOf('.')
        date = date.slice(0, search - 3)
        return date
    }

    const CampaignFields = [
        { label: "campaign name", type: "text", autoFocus: true, value: values.campaignName, placeholder: "My campaign", name: "campaignName" },
        { label: "funding goal", type: "number", value: values.fundingGoal, placeholder: "In Eth", name: "fundingGoal" },
        { label: "deadline", type: "datetime-local", value: values.deadline, minimum: getDate, name: "deadline" },
        { label: "funding cap", type: "number", value: values.fundingCap, placeholder: "In Eth", customError: errors.fundingCap, name: "fundingCap", },
        { label: "beneficiary", type: "text", finish: 3, start: 1, value: values.beneficiary, placeholder: falseAddress, customError: errors.beneficiary, name: "beneficiary" }
    ]
    useEffect(() => {
        loadBlockchainData()
            .then(value => {
                if (value) {
                    setContract(value)
                }
                else { alert("Please Connect your wallet") }
            })
    }, [])
    return (
        <>
            <CreateCampaign
                CampaignFields={CampaignFields}
                handleChange={handleChange}
                values={values}
                captureFile={captureFile}
                submit={submit.bind(this)}
                isSubmiting={isSubmiting}
            />
            {/* <Route exact path="/post/:id" render={({ match }) => (
                <SingleCampaign values={values} id={(p => p.id === match.params.id)}/> */}
            >
        </>
    )
}

export default withRouter(CreateCampaignPage);