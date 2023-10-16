import React from 'react'
import "./Sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import { SearchOffOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar src='https://media.licdn.com/dms/image/C4E03AQHVCMxGIKbUWA/profile-displayphoto-shrink_800_800/0/1612514356076?e=1703116800&v=beta&t=MrIwD6oaFyTNJxnf0NLKzTyp2CKPRc0-AmbwQlQOMFU' />
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>    
        </div>

        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchOffOutlined />
                <input placeholder='Arama yapmak için veya yeni sohbet başlatmak için meetin girin.' />
            </div>
        </div>

        <div className='sidebar__chats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar