import React from 'react';
import { IoLogoIonitron } from 'react-icons/io';
import { FaUserFriends } from 'react-icons/fa'

function ChatMenuText() {
  return (
  <div className='ChatMenuText'>
    <div className='MenuText active'>
        <FaUserFriends />
        Arkadaşlar
    </div>
    <div className='MenuText'>
      <IoLogoIonitron />
       Nitro
    </div>
  </div>
  );
}

export default ChatMenuText;
