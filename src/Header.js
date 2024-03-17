import React from 'react';
import "./Header.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className='header-header'>

      <IconButton>
        <PermIdentityIcon className='header_icon' fontSize='large' />
      </IconButton>
      <Link to="/">
        <img className='header_image' src={require('./Images/lovelink.png')} alt='logo'></img>
      </Link>
      
      <Link to="/chats">
        <IconButton>
          <MailOutlineIcon className='header_icon' fontSize='large' />
        </IconButton>
      </Link>

    </div>
  );
}

export default Header;

