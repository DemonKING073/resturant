import {Link, useHistory} from 'react-router-dom';
import Cart from '../assets/cart.svg';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserIcon from '../assets/account.svg';

const Nav=()=>{
    const userDetails = useSelector(state=>state.user.details.User);
    
    
    const history = useHistory();
    const [navActive, setNavActive] = useState(true)
;    const toogleClass = () =>{
        setNavActive(!navActive);
    }
    const toOrderPage = () =>{
        history.push('/order')
    }
    const toHomePage = () =>{
        history.push('/');
    }
    const logOut = () =>{
        localStorage.removeItem('isLogged');
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        toHomePage();
    }
    const counter = useSelector(state=>state.cart.count); 
    let isLogged = useSelector(state=>state.user.isLogged);
    isLogged=localStorage.getItem('isLogged');
    if(isLogged){
        return(
            <nav>
            <Link to="/">
                <div className="logo-name">Himawari Dinner</div>
            </Link>
            <div className="nav-links">
                <ul>
                    <Link to="/menu">
                        <li>Menu</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/cart" className="nav-cart-link">
                            <div className="cart-icon-div">
                                <img src={Cart} alt="logo"/>
                                <span className="counter">{counter}</span>
                            </div>
                            <div><li>Cart</li></div>
                    </Link>
                    <Link to="#">
                        <li>
                            <img src={UserIcon} alt="userIcon" onClick={toogleClass} className="user-icon" />
                            <div className={navActive?'drop-down':null}>
                                <ul> 
                                    <li><p className="user-name">{userDetails?userDetails.name:null}</p></li>
                                    <li><button className="nav-button" onClick={()=>{
                                        toogleClass();
                                        toOrderPage();
                                        }}>Orders</button></li>
                                    <li><button className="nav-button" onClick={()=>{
                                        toogleClass();
                                        logOut();
                                    }}>Sign Out</button></li>
                                </ul>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
        );
    }else{
        return(
            <nav>
            <Link to="/">
                <div className="logo-name">Himawari Dinner</div>
            </Link>
            <div className="nav-links">
                <ul>
                    <Link to="/menu">
                        <li>Menu</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/cart" className="nav-cart-link">
                            <div className="cart-icon-div">
                                <img src={Cart} alt="logo"/>
                                <span className="counter">{counter}</span>
                            </div>
                            <div><li>Cart</li></div>
                    </Link>
                </ul>
            </div>
        </nav>
        );
    }
    
}

export default Nav;