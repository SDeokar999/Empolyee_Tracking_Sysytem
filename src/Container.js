import React, { useState } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import './HomePage.css';
import Header from './Header';

const Container=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false);

    function login(Username,password) {
        console.log(Username);
        console.log(password);
        if(Username==password){
            setIsLoggedIn(true)
        }   
    }
    function logout() {
        setIsLoggedIn(false)
    }

    var viewToRender=null;

    if(isLoggedIn){
        viewToRender=<HomePage logout={logout}/>}
       else {
        viewToRender=<LoginPage login={login} />
        }
 
    return(
        
        viewToRender
    )
    }

export default Container;

