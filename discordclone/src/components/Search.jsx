import React, { useState } from 'react';
import Friend from './Friend';

function Search({placeholder}) {
  return(
   <div className='search-container'>
       <input type="search" placeholder={placeholder} className='search' />
   </div>
  );
}

export default Search;
