import React ,{useState} from  'react';
import './LoginPage.css';
import './MainPage.css'

const NewLoginPage = ({login,Homepage}) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    return (
        <>
        <div class="main-text1" onClick={Homepage}>
    HomePage
    </div>
        <div id="particles-js">
            <div id="container">
                <form class="my-form">
                    <h3> Login </h3>
                    <div class="form-group">
                        <input type="text" name="USERNAME" placeholder="USERNAME" value={user} onChange={(event) => {
                            setUser(event.target.value);
                        }} />
                    </div>
                    <div class="form-group">
                        <input type="Password" name="Password" placeholder="PASSWORD" value={pass} onChange={(event) => {
                            setPass(event.target.value)
                        }} />
                    </div>

                    <input class="button" type="submit" value="Login" name="" onClick={() => {
                        login(user, pass);
                    }} />
                </form>
            </div>
        </div>
    </>)
}
export default NewLoginPage;