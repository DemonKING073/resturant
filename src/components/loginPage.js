import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import LoginImage from '../assets/login.jpg';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userStatus } from '../actions/UserActions'



const LoginPage = () =>{
    const dispatch = useDispatch()
    const initialState = {
        email:null,
        password:null,
    };
    const [data, setData] = useState(initialState);
    const history=useHistory();
    const register=()=>{
        history.push('/register');
    }
    const doRedirecting = () =>{
        console.log('redirecting')
        history.push('/');
        dispatch(userStatus());
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/user/login',data)
            .then(res=>{
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('isLogged',true)
                doRedirecting();
            })
            .catch(err=>{
                alert(err.response.data.message);
            });
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
                 <form onSubmit={handleSubmit}>
                     <div className="textbox">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input type="text" placeholder="Email" onChange={(e)=>setData({...data,email:e.target.value})} />
                     </div>
                     <div className="textbox">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" placeholder="Password" onChange={(e)=>setData({...data,password:e.target.value})} />
                     </div>
                    <button className="btn-login" type="submit">Login</button>
                    <h4>Need and account? <button className="btn-login-page" onClick={register}>Sign up</button></h4>
                 </form>
            </div>
        </div>
    );
}

export default LoginPage;