import React from 'react';
import {
	NavLink
} from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import NavbarRight from './NavbarRight';

function Navbar() {
  return(
  <div>
    <div className="navbar flex justify-between px-4">
     <nav className='Nav'>
    <NavLink to="/" className="flex nav-first-link">
      <BsFillPeopleFill className='navbaricon' />
      Friends
    </NavLink>
    <NavLink to="/" className="navbar-link">
        Online
    </NavLink>
    <NavLink to="/" className="navbar-link">
      All
    </NavLink>
    <NavLink to="/" className="navbar-link">
      Pending
    </NavLink>
    <NavLink to="/" className="navbar-link">
      Blocked
    </NavLink>
    </nav>
    <NavbarRight />
  </div>
  <hr className='opacity-5' />
  </div>
  );
}

export default Navbar;
