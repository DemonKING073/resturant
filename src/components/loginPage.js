import React from 'react';
import {useHistory} from 'react-router-dom';
import LoginImage from '../assets/login.jpg';



const LoginPage = () =>{
    const history=useHistory();
    const register=()=>{
        history.push('/register');
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
                <h1>Login</h1>
                 <form>
                     <div className="textbox">
                        <input type="text" placeholder="Email" />
                     </div>
                     <div className="textbox">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" placeholder="Password" />
                     </div>
                    <button className="btn-login" type="submit">Login</button>
                    <h4>Need and account? <button className="btn-login-page" onClick={register}>Sign up</button></h4>
                 </form>
            </div>
        </div>
    );
}

export default LoginPage;