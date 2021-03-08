import React, { useState } from 'react';
import attendaceData from './mock/attendaceData';
import './HomePage.css';
import Header from './Header';

const Attendace = ({change,logout}) => {
    const [selectedEmployee, setSelectedEmployee] = useState(attendaceData[0].id);
    var data = attendaceData.filter((key) => {
        return key.id == selectedEmployee;
    })[0].data;
    

    return (
        <><div id="main">
            <div id="Attendace">
                <div id="Employeeinfo">
                    <div id="arrows1">Select Employee Name:</div>
                    <select id="arrows" onChange={(event) => {
                                setSelectedEmployee(event.target.value)
                            }}>
                        {attendaceData.map((keys) => {
                            return <option value={keys.id} >{keys.name}</option>
                        })}
                    </select>
                </div>
                <div id="Employeeinfo">
                    <div className="ename">Date</div>
                    <div className="ename">LoginIn Time</div>
                    <div className="ename">Logout Time</div>
                    <div className="ename">Total Working Hour</div>
                </div>
                <div className={'attandanceWrapper'}>
                    {data && data.map((keys) => {
                        return (
                            <div id="enteryBox">
                                <div className="entery">{keys.Date}</div>
                                <div className="entery">{keys.LoginTime}</div>
                                <div className="entery">{keys.LogoutTime}</div>
                                <div className="entery">{keys.TotalHour}</div>
                                <br />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
        </>
    )
}

export default Attendace;

