import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import EmployeeCredential from './EmployeeCredential';
import Attendace from './Attendance';
import Container from './Container';
import MainPage from './MainPage';
import NewLoginPage from './NewLoginPage';


ReactDOM.render(
<MainPage/>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

