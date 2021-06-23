import React, { Component, useState } from 'react';
import Navbar from './NavBar/Nav.js';
import SideBar from './NavBar/sideBar/SideBar.js';
import Hero from './hero/Hero.js';



const ITEMS = ["campaigns"]


export const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)




    const toggle = () => {
        setIsOpen(!isOpen)
        setOpen(!open)
    }

    return (
        <>
            <Navbar toggle={toggle} items={ITEMS} />
            <SideBar isOpen={isOpen} toggle={toggle} items ={ITEMS}  open={open}/>
            <Hero/>


        </>
    )
}

export default HomePage;