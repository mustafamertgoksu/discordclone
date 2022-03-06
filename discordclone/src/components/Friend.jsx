import React from 'react';

function Friend(props) {
  return(
   <div className='Friend'>
       <img className='discord-img' src={props.image} />
       <strong>{props.name}</strong>
   </div>
  );
}

export default Friend;
