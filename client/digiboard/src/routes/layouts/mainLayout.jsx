import React from 'react';
import LeftBar from '../../components/leftBar/leftBar';
import TopBar from '../../components/topBar/topBar';
import { Outlet } from 'react-router';

const mainLayout = () => {
  return (
    <main className='app'>
      <LeftBar />
      <div className='content'>
        <TopBar />
        <Outlet />
      </div>
    </main>
  )
}

export default mainLayout