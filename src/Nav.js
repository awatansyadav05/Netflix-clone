import React, { useEffect, useState } from "react";
import "./Nav.css";
//import { unstable_HistoryRouter } from "react-router-dom";
import {useHistory} from "react-router-dom";

function Nav (){
const [show, handleShow] = useState(false);
const history = useHistory();
const transitionNavBar =()=> {
    if (window.scrollY >100){
        handleShow(true);
    }else {
        handleShow(false)
    }
}
useEffect (()=>{
    window.addEventListener('scroll' , transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar)
}, [])
    return (
    <div className=
        {`nav ${show && "nav_black"}`}>
        <div className="nav_contents">

        <img 
        onClick={() => history.push('/profile')}
        className= "nav_logo" src="https://imgs.search.brave.com/iMK0bpQOHFE9qAS6J2UI9mfJ97x8nhrepANtIF_PSds/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n" alt=""></img> 
        <img 

        onClick={() => history.push('/profile')}
        className=" nav_avatar" src="https://imgs.search.brave.com/johqkei2LXpFWrAMNCrVleslxkwYGm04hi8-A_jkkW0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZXNzZW50aWFs/LXJvdW5kZWQvNjQv/Um91bmRlZC0zMS01/MTIucG5n" alt="" />
    </div>

    </div>)
        
    
}
export default Nav;