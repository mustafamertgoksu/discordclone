import React from 'react';
import Navbar from "./Navbar";
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

function Content() {
  return <div className='Content'>
    <Navbar />
    <div className='flex'>
      <ContentLeft />  
      <ContentRight />
    </div>
  </div>;
}

export default Content;
