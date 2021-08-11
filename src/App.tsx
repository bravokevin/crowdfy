import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Web3 from 'web3'

import HomePage from "./components/HomePage";

import Navbar from "./components/NavBar/Nav";
import SideBar from "./components/NavBar/sideBar/SideBar";
import Campaigns from "./Campaigns";
import CreateCampaignPage from "./CreateCampaignPage";
import { SingleCampaign } from "./components/SingleCampaign/SingleCampaign";


const ITEMS = ["campaigns"]

const App: any = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false)
  const [wallet, setWallet] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
      setOpen(!open)
  }

  const loadWeb3  = async ()=>{
    if(window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable();
    }
    else if(window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
        window.alert('Non-ehtereum browser detected. Try instaling metamask')
    }

}

useEffect(() =>{
    const DefiningMetamask = async ()=>{

        await loadWeb3()
    } 
     DefiningMetamask();
}, [])
// detect metamask 


  const campaignCreationData = (values: any, cid:string) =>{
    console.log(values, cid)
  } 

  return (
    <>
    <Router>
    <Navbar toggle={toggle} items={ITEMS} />
    <SideBar isOpen={isOpen} toggle={toggle} items={ITEMS} open={open} />
      <Route path="/" exact component={HomePage} />
      <Route path="/newCampaign" >
        <CreateCampaignPage sendData ={campaignCreationData}/>
      </Route>
      <Route path="/campaigns" component={Campaigns}/>
      <Route path='/single' component={SingleCampaign}/>
    </Router>
    </>
  );

}

export default App;