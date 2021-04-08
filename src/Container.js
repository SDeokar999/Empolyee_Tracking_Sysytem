import React, { useState } from 'react';
import NewLoginPage from './NewLoginPage';
import HomePage from './HomePage';
import './HomePage.css';
import Header from './Header';
import MainPage from './MainPage';

const Container = ({Homepage,logout}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login(Username, password) {
        if (Username == password) {
            setIsLoggedIn(true)
        }
    }
    // function logout() {
    //     setIsLoggedIn(false)
    // }

    var viewToRender = null;
    if (isLoggedIn) {
        viewToRender = <HomePage logout={logout} />
    }
    else {
        viewToRender = <NewLoginPage login={login} Homepage={Homepage}/>
    }
    return (

        viewToRender
    )
}

export default Container;

