import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { RiCompassDiscoverLine } from 'react-icons/ri';

import {
	NavLink
} from "react-router-dom";

function Sidebar() {

  let imgSource1 = "https://cdn.discordapp.com/icons/936600327682142209/88280e52896e7d1e553491978bfdb408.webp?size=96";

  return(
   <div className="Sidebar">
     <div className='discord-icon-container'>
       <NavLink to="/home">
        <FaDiscord className='discord-icon' title='Anasayfa' />
       </NavLink>
     </div>
     <div className="servers">
       <ul>
         <li>
           <NavLink to="/Server">
             <img className='server' src={imgSource1} alt="" />
           </NavLink>
         </li>
       </ul>
     </div>
     <div className="other-icons-container">
        <div className="other-icon margin-no">
          <AiOutlinePlus className='icon' />
        </div>
        <div className="other-icon">
          <RiCompassDiscoverLine className='icon' />
        </div>
        <div className="other-icon">
         <FiDownload className='icon' />
        </div>
     </div>
    </div>
  );
}

export default Sidebar;
