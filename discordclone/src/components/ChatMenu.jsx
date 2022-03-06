import React from 'react';
import ChatMenuText from './ChatMenuText';
import FriendList from './FriendList';
import Search from './Search';

function ChatMenu() {
  return(
   <div className='Chat-Menu'>
     <Search placeholder="Find or start a conversation" />
     <ChatMenuText />
     <FriendList />
   </div>
  );
}

export default ChatMenu;
