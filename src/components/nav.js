import {Link, useHistory} from 'react-router-dom';
import Cart from '../assets/cart.svg';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserIcon from '../assets/account.svg';
import MenuIcon from '../assets/menu.svg';

const Nav=()=>{
    
    const userDetails = useSelector(state=>state.user.details.User);
    
    const [lamo,setLamo] = useState(false)
    const menuHide = () =>{
        setLamo(!lamo);
    }
    const responsiveMenu =() =>{
        console.log('buttonClicked');
        setLamo(!lamo);
    }
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
                <div onClick={()=>setLamo(false)} className="logo-name">Himawari Dinner</div>
            </Link>
            <div className={lamo?'add-opacity':'nav-links'}>
                <ul>
                    <Link to="/menu">
                        <li onClick={menuHide}>Menu</li>
                    </Link>
                    <Link to="/about">
                        <li onClick={menuHide}>About</li>
                    </Link>
                    <Link to="/cart" className="nav-cart-link">
                            <div className="cart-icon-div">
                                <img  src={Cart} alt="logo"/>
                                <span className="counter">{counter}</span>
                            </div>
                            <div><li onClick={menuHide}>Cart</li></div>
                    </Link>
                    <Link to="#">
                        <li>
                            <img src={UserIcon} alt="userIcon" onClick={toogleClass} className="user-icon" />
                            <div className={navActive?'drop-down':null}>
                                <ul> 
                                    <li><p className="user-name">{userDetails?userDetails.name:null}</p></li>
                                    <li><button className="nav-button" onClick={()=>{
                                        setLamo(false);
                                        toogleClass();
                                        toOrderPage();
                                        }}>Orders</button></li>
                                    <li><button className="nav-button" onClick={()=>{
                                        toogleClass();
                                        setLamo(false);
                                        logOut();
                                    }}>Sign Out</button></li>
                                </ul>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
            <img className="menu-icon" src={MenuIcon} onClick={()=>responsiveMenu()} alt="menu-icon" />
        </nav>
        );
    }else{
        return(
            <nav>
            <Link to="/">
                <div onClick={()=>setLamo(false)} className="logo-name">Himawari Dinner</div>
            </Link>
            
            <div className={lamo?'add-opacity':'nav-links'}>
                <ul>
                    <Link  to="/menu">
                        <li onClick={menuHide}>Menu</li>
                    </Link>
                    <Link to="/login">
                        <li onClick={menuHide}>Login</li>
                    </Link>
                    <Link to="/about">
                        <li onClick={menuHide}>About</li>
                    </Link>
                    <Link onClick={menuHide} to="/cart" className="nav-cart-link">
                            <div className="cart-icon-div">
                                <img src={Cart} alt="logo"/>
                                <span className="counter">{counter}</span>
                            </div>
                            <div><li>Cart</li></div>
                    </Link>
                    
                </ul>
            </div>
            
                <img src={MenuIcon} alt="menu-icon" onClick={()=>responsiveMenu()} className="menu-icon" />
            
        </nav>
        );
    }
    
}

export default Nav;