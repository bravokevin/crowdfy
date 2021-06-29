import React, {useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from "./components/HomePage";

import Navbar from "./components/NavBar/Nav";
import SideBar from "./components/NavBar/sideBar/SideBar";
import Campaigns from "./Campaigns";
import CreateCampaignPage from "./CreateCampaignPage";


const ITEMS = ["campaigns"]

const App = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
      setOpen(!open)
  }

  return (
    <>
    <Router>
    <Navbar toggle={toggle} items={ITEMS} />
    <SideBar isOpen={isOpen} toggle={toggle} items={ITEMS} open={open} />
      <Route path="/" exact component={HomePage} />
      <Route path="/newCampaign" component={CreateCampaignPage} />
      <Route path="/campaigns" component={Campaigns}/>
    </Router>
    </>
  );

}

export default App;