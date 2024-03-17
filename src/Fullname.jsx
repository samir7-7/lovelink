import React, { useState } from 'react';
import "./Fullname.css"
import PersonIcon from '@mui/icons-material/Person';
import { textDB } from './firebase'
import { v4 } from "uuid"
// import {getDatabase, ref,set, get, child } from "firebase/database";
import { addDoc, collection } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import {app} from "./firebase"


function Fullname() {

  // New way to add to database
  // const db = getDatabase(app);
  // document.getElementById('Nextt').addEventListener("Click",function(e){
  //   set(ref(db,'name/'+document.getElementById("fullname").value),{
  //     name: document.getElementById("fullname").value,
  //   });
  //   alert("Data Added");
  // })



  const navigate = useNavigate();
  const [fullname, setFullname] = useState('')
  const [name, setName] = useState()

  const handleNext = async (e) => {
    
      // const names= e.target.value.length
      if(fullname.length>=3){
        const valRef = collection(textDB, "txtData")
        await addDoc(valRef, { txtVal:fullname})
        navigate("/dob")
      }
      else{
        alert("Please enter your name.")
      }

    }

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
              <input type='text' name='Name' id='fullname' placeholder='Name' required
                onChange={(e)=>setFullname(e.target.value)}
              ></input>
            </div>
          </div>
        </form>
        <div className="fullname-submit">
          <div className="fullname-next" onClick={handleNext} id='Nextt'>Next</div>

        </div>
      </div>
    </div>
  )
}

export default Fullname