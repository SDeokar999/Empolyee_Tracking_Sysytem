import React from "react";
import { useState } from "react/cjs/react.development";
import './HomePage.css';
import Home from './Home';
import Attendace from './Attendance';
import EmployeeCredential from './EmployeeCredential';
import Header from './Header';


const HomePage = ({change,logout}) => {
    const [dis, setDis] = useState('HomePage');


    var viewToRender = null;

    switch (dis) {
        case 'Attendance':
            viewToRender = <Attendace change={setDis} logout={logout}/>
            break;
        case 'Crate':
            viewToRender = <EmployeeCredential change={setDis} logout={logout}/>
            break;
        case 'home':
                viewToRender = <Home change={setDis} logout={logout}/>
                break;
            default:
            viewToRender = <Home change={setDis} />
    }
    return (
        <>
        <Header change={setDis} logout={logout}/>
      {  viewToRender}
        </>
    )
}

export default HomePage;



// Parties={Parties} Notes={Notes}  Leaves={Leaves} Daily={Daily} Locations={Locations}