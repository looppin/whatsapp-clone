import React from 'react'
import Sidebar from './components/chat/sidebar/Sidebar'
import Box from './components/chat/box/Box'
import './App.css';

function App() {
  return (
    <div className='app'>
        <div className='app__body'>
            <Sidebar />
            <Box />
        </div>
    </div>
  )
}

export default App