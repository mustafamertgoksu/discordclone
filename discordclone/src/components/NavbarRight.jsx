import react from 'react';
import React from 'react';
 import { BiMessageAdd } from "react-icons/bi";
 import { RiInboxFill } from "react-icons/ri";
 import { BsQuestionCircle } from "react-icons/bs";

function NavbarRight() {
  return (
    <div className='flex'>
      <BiMessageAdd className='navbarrighticons'/>
      <RiInboxFill className='navbarrighticons' />
      <BsQuestionCircle className='navbarrighticons' />
    </div>
  )
}

export default NavbarRight