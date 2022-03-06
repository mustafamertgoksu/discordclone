import React from 'react';
import { BsSearch } from "react-icons/bs";

function ContentLeft() {
  return (
    <div className='ContentLeft p-4'>
      <h1 className="text-2xl my-2">Add Friend</h1>
      <p className="text-gray-400 my-2">
        You can add friend with Discord Tag.
      </p>
      <input placeholder="Enter a username #0000" className="input"/>
    </div>
  )
}

export default ContentLeft