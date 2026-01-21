import { useState } from 'react';
import './App.css';

import LeftBar from './components/leftBar/leftBar';
import TopBar from './components/topBar/topBar';
import Gallery from './components/gallery/gallery';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app'>
      <LeftBar />
      <div className='content'>
        <TopBar />
        <Gallery />
      </div>
    </main>
  )
}

export default App
