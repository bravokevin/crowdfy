import React, { useState } from 'react';
import { BurgerS } from './SideBar.styles.js';

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <BurgerS open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerS>
      {/* <RightNav open={open} /> */}
    </>
  )
}
export default Burger