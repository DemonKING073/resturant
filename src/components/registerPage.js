import React from 'react';
import {useHistory} from 'react-router-dom';
import LoginImage from '../assets/login.jpg';



const LoginPage = () =>{
    const history=useHistory();
    const login=()=>{
        history.push('/login');
    }
    return(
        <div className="login-page">
            <div className="login-img-div">
                <img src={LoginImage} alt="resturant"  />
                <h1>Good <span>Food</span></h1>
                <h2>Good <span>People</span></h2>
                <h3>Good <span>Times</span></h3>
                <h5>@Himwari Dinner</h5>
            </div>
            <div className="login-box">
                <h1>Register</h1>
                 <form>
                     <div className="textbox">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" placeholder="Name" />
                     </div>
                     <div className="textbox">
                     <i class="fa fa-envelope-square"></i>
                        <input type="text" placeholder="Email" />
                     </div>
                     <div className="textbox">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" placeholder="Password" />
                     </div>
                     <div className="textbox">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" placeholder="Verify Password" />
                     </div>
                    <button className="btn-login" type="submit">Login</button>
                    <h4>Already have account? <button className="btn-login-page" onClick={login}>Login</button></h4>
                 </form>
            </div>
        </div>
    );
}

export default LoginPage;