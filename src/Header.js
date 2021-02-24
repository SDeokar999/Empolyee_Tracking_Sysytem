import React from 'react';
import './HomePage.css';
import LoginPage from './LoginPage'; 

const Header=({change,logout})=>{


    
return(
<div id="header">
    <div id="home" onClick={()=>change('home')}>Home</div>
    <div id="logout" onClick={logout}>Logout</div>
</div>)

}
export default Header;