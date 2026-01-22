import React from 'react';
import './leftBar.css';

const leftBar = () => {
  return (
    <div className='leftBar'>

      <div className='menuIcons'>
        <a href="/">
          <span className='menuLogo'>
            DB
          </span>
        </a>
        <a href="/" className='menuIcon'>
          <img src="/general/home.svg" alt="logo" />
        </a>
        <a href="/" className='menuIcon'>
          <img src="/general/create.svg" alt="logo" />
        </a>
        <a href="/" className='menuIcon'>
          <img src="/general/updates.svg" alt="logo" />
        </a>
        <a href="/" className='menuIcon'>
          <img src="/general/messages.svg" alt="logo" />
        </a>
      </div>

      <a href="/" className='menuIcon'>
          <img src="/general/settings.svg" alt="logo" />
      </a>

    </div>
  )
}

export default leftBar