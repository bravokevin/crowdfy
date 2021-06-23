import React, {useState} from "react"
import Navbar from "./components/NavBar/Nav"
import SideBar from "./components/NavBar/sideBar/SideBar"

const ITEMS = ["campaigns"]


const CreateCampaign = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
        </>
    )

}

export default CreateCampaign