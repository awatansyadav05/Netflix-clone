import React, { useState } from 'react'
import './Loginscreen.css';
import SignupScreen from './SignupScreen';


function Loginscreen() {
  const [signIn, setSignIn ] = useState (false);
  return (
    <div className='Loginscreen'>
    <img className='login_screen_bakground' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fnetflix-background&psig=AOvVaw3o-2auTzvwFakc8fJoJTuU&ust=1705381460257000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIC8x5XP3oMDFQAAAAAdAAAAABAI" alt='' />
   <img className='login_screen_logo' src="https://imgs.search.brave.com/iMK0bpQOHFE9qAS6J2UI9mfJ97x8nhrepANtIF_PSds/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n"
    alt= "" />
    <button onClick={()=> setSignIn(true)} 
    className='loginscreen_button'>
        Sign in
    </button>
   <div className='login_screen_gradient' />
   <div className='login_screen_body'>
   {signIn ? (
    <SignupScreen />
   ) : (<> 
    <h1> Unlimited films, TV programmes and more.</h1>
    <h2> Watch anytime, cancel at anytime.</h2>
    <h3> Ready to watch? Enter your email to create or restart your membership</h3>
   <div  className='login_screen_input'>
   <form>
    <input type='email' placeholder='Email Address' />
    <button onClick={()=> setSignIn(true)}
    className='login_screen_getStarted'>GET STARTED</button>
   </form> </div>
   </>
   )}
   
   
    </div>
  
  </div>
  )
}

export default Loginscreen;