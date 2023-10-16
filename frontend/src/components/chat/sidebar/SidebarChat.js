import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className='sidebarChat__info'>
            <h2>Sohbet Adı</h2>
            <p>Son mesaj</p>
        </div>
    </div>
  )
}

export default SidebarChat