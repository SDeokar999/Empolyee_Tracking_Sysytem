import React from 'react';
import './HomePage.css';
const EmployeeCredentialInfo=({text,onSelect,id})=>{
    return(
        <>
        <div id="EmployeeCredentialInfobox">
            <div id="userinfo1">{text.name}</div>
            <div id="userinfo2">{text.id}</div>
            <div id="userinfo3">{text.username}</div>
            <div id="userinfo4">{text.password}</div>
            <button id="userinfo5" onClick={()=>{onSelect(id)}}>Delete</button>
            </div>
        </>
    )
}

export default EmployeeCredentialInfo;