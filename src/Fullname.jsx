import React from 'react'
import "./Fullname.css"
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'; 

function Fullname() {
  return (
    <div className='whole'>
        <div className="fullname-container">
        <div className="fullname-header">
                <img src={require('./Images/lovelink.png')} alt="logo" className='fullnamelovelink-logo' />
                <div className="text">
                    Enter your name
                    <div className="fullname-underline"></div>
                </div>
                <div className="fullname-para">
                <p>Enter your real name because it will be shown on your profile.</p>
                </div>
        </div>
        <form action="">
            <div className="fullname-inputs">
                        <div className="fullname-input">
                            <PersonIcon className='picon' fontSize='medium' />
                            <input type='text' name='Name' id='fullname' placeholder='Name'></input>
                        </div>
            </div>          
        </form>
        <div className="fullname-submit">
                <div className="fullname-next">Next</div>
                <Link to="/selectgender">
                <button>Go</button>
                </Link>
               
                </div>
    </div>
    </div>
  )
}

export default Fullname