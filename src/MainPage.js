import React ,{useState}from 'react';
import './MainPage.css';
import Container from './Container';

const MainPage=()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function logins() {
        
            setIsLoggedIn(false)
        
    }
    let viewToRender=null;
    if(isLoggedIn){
        viewToRender = <div class="main-image">
        <div class="main-text" onClick={logins}>
            Login    
            </div>
            </div>
            }
    
    else {
        viewToRender = <Container Homepage={setIsLoggedIn} logout={setIsLoggedIn}/>
    }
    return(
viewToRender
        
    )
}

export default MainPage;



