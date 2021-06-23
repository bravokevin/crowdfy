import React, {useState} from "react"
import Navbar from "./components/NavBar/Nav"

const ITEMS = ["campaigns"]


const CreateCampaign = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
        <Navbar toggle={toggle} items={ITEMS} />
        </>
    )

}

export default CreateCampaign