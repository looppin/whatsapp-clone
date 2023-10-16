import React from 'react';
import "./Box.css";
import { Avatar, Icon, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import { AttachFile, InsertEmoticon, MoreVert, SearchOffOutlined } from '@mui/icons-material';

function Box() {
  return (
    <div className='box'>
        <div className='chat__header'>
            <Avatar />
            <div className='chat__headerInfo'>
                <h3>Sohbet Adı</h3>
                <p>Son görülme...</p>
            </div>
            <div className='chat__headerRight'>
                <IconButton>
                    <SearchOffOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>

        <div className='chat__body'>
            <p className='chat__message'>
                <span className='chat__name'>Berk</span>
                Bu bir mesaj
                <span className='chat__timestamp'>{new Date().toUTCString()}</span>
            </p>

            <p className='chat__message chat__reciever'>
                <span className='chat__name'>Efe</span>
                Cevap
                <span className='chat__timestamp'>{new Date().toUTCString()}</span>
            </p>

            <p className='chat__message'>
                <span className='chat__name'>Berk</span>
                Bu bir mesaj
                <span className='chat__timestamp'>{new Date().toUTCString()}</span>
            </p>
        </div>

        <div className='chat__footer'>
            <IconButton>
                <InsertEmoticon />
            </IconButton>
            <form>
                <input placeholder='Mesaj giriniz...' 
                type='text' />
                <button type='submit'>
                    Mesajı Gönder
                </button>
            </form>
            <IconButton>
                <MicIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default Box