import React, { useState} from 'react';
import "./dob.css"
import { Link } from 'react-router-dom';  
function Dob() {
    const [color, setColor] = useState("gray");
  return (
    
        <div className="whole">
            <div className="dob-container">
            <div className="dob-header">
                <img src={require('./Images/lovelink.png')} alt="logo" className='lovelink-logo' />
                <div className="text">
                    Enter your DOB
                    <div className="underline"></div>
                </div>

                <div className="para">
                <p>Enter it freely because age is just a number.</p>
                </div>
                </div>

                <form action="">
                    <input onChange={()=> setColor("Next")} type="date" name="dob" id="Dob" />
                </form>

                <div className="dob-submit">
                <div className={color}>Next</div>
                <Link to="/fullname">
                <button>Go</button>
                </Link>
               
                </div>

        </div>
  
        </div>
  )
}

export default Dob