import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { addWallet, handleAccountsChanged } from "./web3Utils";

import HomePage from "./components/HomePage";

import Navbar from "./components/NavBar/Nav";
import SideBar from "./components/NavBar/sideBar/SideBar";
import Campaigns from "./Campaigns";
import CreateCampaignPage from "./CreateCampaignPage";
import { SingleCampaignCreated } from "./components/SingleCampaign/SingleCampaignCreated";
import { SingleCampaign } from "./components/SingleCampaign/SingleCampaign";
import { notFound404 } from "./404";


const NAV_ITMES = ["campaigns"]

const App: any = () => {


  //to close or open the sidebar
  const [isOpen, setIsOpen] = useState(false);





  const [wallet, setWallet] = useState({account: ''});
  const [isWallet, setIsWallet] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen)
  }


  useEffect(() => {
    const DefiningMetamask = async () => {

      const account = await addWallet();
      setWallet(account)
      setIsWallet(true);

      // const fabricContract = await loadBlockchainData();

      // setContracts({
      //   fabricContract
      // })
    }
    DefiningMetamask();
  }, [])
  // detect metamask 
// useEffect(() =>{
//  ethereum.on('accountsChanged', handleAccountsChanged(wallet.account))
//     .then( (newAccount: string) =>{ setWallet({account: newAccount}) })

// })

//estar mirando constante mente si el usuario s cambio de cuenta.
  return (
    <>
      <Router>
        <Navbar toggle={toggle}
          items={NAV_ITMES}
          isWallet={isWallet}
          setAddress={handleAccountsChanged}
          address={wallet} />

        <SideBar isOpen={isOpen}
          toggle={toggle}
          items={NAV_ITMES}
          open={isOpen}
          isWallet={isWallet}
          setAddress={handleAccountsChanged}
          address={wallet} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/newCampaign" >
            <CreateCampaignPage />
          </Route>
          <Route path="/campaigns" component={Campaigns} />
          <Route path='/campaign/:id' render={(props) => {
            return (<SingleCampaign {...props} account={wallet} />)
          }} />
          <Route path='/campaignCreated/:add' component={SingleCampaignCreated}/>
          <Redirect from="/campaign/campaigns" to="/campaigns" />
          <Route component={notFound404} />
        </Switch>

      </Router>
    </>
  );

}

export default App;