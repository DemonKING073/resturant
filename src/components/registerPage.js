import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import LoginImage from '../assets/login.jpg';
import axios from 'axios';


const LoginPage = () =>{
    const [verify,setVerify] = useState('');
    const initialState = {
        name:null,
        email:null,
        password:null,
    }
    const [data, setData] = useState(initialState);
    const history=useHistory();
    const loginpage=()=>{
        history.push('/login');
    }
    const handleSubmit = (e) =>{
        console.log('form submited');
        e.preventDefault();
        console.log(data);
        axios.post('http://localhost:3000/user/signup',data)
            .then(res=>{
                alert('Registered Successfully');
                loginpage();

            })
            .catch(err=>{
                if(err.response.status===409){
                    alert(err.response.data.message)
                }else{
                    alert(err.response.statusText);
                }
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
                <h1>Register</h1>
                 <form onSubmit={handleSubmit}>
                     <div className="textbox">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input type="text" placeholder="Name" onChange={(e)=>setData({...data,name:e.target.value})} />
                     </div>
                     <div className="textbox">
                     <i className="fa fa-envelope-square"></i>
                        <input type="text" placeholder="Email" onChange={(e)=>setData({...data,email:e.target.value})} />
                     </div>
                     <div className="textbox">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" onChange={(e)=>setVerify(e.target.value)} placeholder="Password" />
                     </div>
                     <div className="textbox">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" placeholder="Verify Password" onChange={(e)=>setData({...data,password:e.target.value})} />
                     </div>
                     {verify!==data.password?<h3>Password do not match!</h3>:null}
                    <button className="btn-login" type="submit">Register</button>
                    <h4>Already have account? <button className="btn-login-page" onClick={loginpage}>Login</button></h4>
                 </form>
            </div>
        </div>
    );
}

export default LoginPage;