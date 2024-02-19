import React from 'react'
import "./Profilescreen.css";
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectuser } from '../features/userSlice';
import { auth } from '../firebase';
import Planscreen from './Planscreen';

function Profilescreen() {
    const user = useSelector(selectuser);
  return (
    <div className='profilescreen'>

    <Nav />
    <div className='profilescreen_body' >
    <h1>Edit Profile</h1>
    <div className='profilescreen_info'>
        <img src= "https://imgs.search.brave.com/johqkei2LXpFWrAMNCrVleslxkwYGm04hi8-A_jkkW0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZXNzZW50aWFs/LXJvdW5kZWQvNjQv/Um91bmRlZC0zMS01/MTIucG5n" alt='' />
    <div className='profilescreen_details'>
    <h2>{user.email}</h2>
    <div className='profilescreen_plans'>
    <h3>
        Plans Subscribe
    </h3> 
    <Planscreen />
    <button onClick= {()=>auth.signOut} className='profilescreen_signout'>
    Sign Out
    </button></div>

    </div>
    
    </div>
    </div>


    </div>
  )
}

export default Profilescreen