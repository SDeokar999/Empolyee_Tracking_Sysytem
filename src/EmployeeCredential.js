import React, { useState } from 'react';
import './HomePage.css';
import EmployeeCredentialInfo from './EmployeeCredentialInfo';

const EmployeeCredential = () => {
    const [inputList, setInputList] = useState();
    const [Items, setItems] = useState([]);
    function itemEvent(event, context) {
        setInputList({ ...inputList, [context]: event.target.value })
    }
    function ListOfItems() {
        setItems((oldItemss) => {
            return [...oldItemss, inputList]
        })
        setInputList('');
    }

    function deleteItem(id) {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <><div id="EmployeeMainBoxmain">
            
            <div id="EmployeeMainBox">
                <div id="EmployeeinfoBox">
                    <div id="buttons">Create Credential</div>
                    <div id="Employeeinfo">
                      <div className='subDiv'>
                       Name: <input type="text" className="inputs" value={(inputList && inputList.name) || ""} onChange={(event) => {
                            itemEvent(event, "name")
                        }} />
                      </div>
                      <div className='subDiv'>
                      Employee ID : <input type="text" className="inputs" value={(inputList && inputList.id) || ""} onChange={(event) => {
                            itemEvent(event, "id")
                        }} />
                      </div>
                      <div className='subDiv'>
                        User Name : <input type="text" className="inputs" value={(inputList && inputList.username) || ""} onChange={(event) => {
                            itemEvent(event, "username")
                        }} />
                      </div>
                      <div className='subDiv'>
                        Password : <input type="text" className="inputs" value={(inputList && inputList.password) || ""} onChange={(event) => {
                            itemEvent(event, "password")
                        }} />
                      </div>
                      <div className='subDiv'>
                        <button type="submit" onClick={(ListOfItems)} className="inputs" >Add Credential</button>
                      </div>
                    </div>
                    <div id="Employeeinfo">
                        <div className="ename">Employee Name</div>
                        <div className="ename">Employee ID</div>
                        <div className="ename">Username</div>
                        <div className="ename">Password</div>
                        <div className="ename">Actions</div>
                    </div>

                    <div id="EmployeeinfoBoxusername">
                        {Items.map((itemVal, index) => {
                            return (
                                <>
                                    <div id="Employeeinfobottom">
                                        <EmployeeCredentialInfo key={index} id={index} text={itemVal} onSelect={deleteItem} />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>);
}

export default EmployeeCredential;