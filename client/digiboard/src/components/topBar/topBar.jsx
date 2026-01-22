import React from 'react';
import './topBar.css';
import UserButton from '../userButton/userButton';

const topBar = () => {
  return   (
    <div className='topBar'>
      {/* Top Bar Content - Search Bar */}
      <div className='search'>
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </div>
      {/* Top Bar Content - User  */}
      <UserButton />
    </div>
  )
}

export default topBar