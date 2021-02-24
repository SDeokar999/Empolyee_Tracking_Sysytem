import React, { useState } from 'react';
import './LoginPage.css';
import './HomePage.css';

const LoginPage=({login})=>{
const[user,setUser]=useState('');
const[pass,setPass]=useState('')

    return(
<>
<div id="particles-js">Login Page
<div id="container">
<form class="my-form">
    <h3> Login </h3>
    <div class="form-group">
        <input type="text" name="USERNAME" placeholder="USERNAME" value={user} onChange={(event)=>{
            setUser(event.target.value);
        }}/>
    </div>
    <div class="form-group">
        <input type="Password" name="Password" placeholder="PASSWORD" value={pass} onChange={(event)=>{
            setPass(event.target.value)}}/>
    </div>
        
        <input class="button" type="submit" value="Login" name="" onClick={()=>{
            login(user,pass);
        }}/>
</form>
</div>
</div>
</>
    )
}

export default LoginPage;