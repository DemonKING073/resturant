import {Link, useHistory} from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

const Nav=()=>{
    
    const [chris,setChris] = useState(false);
    const userDetails = useSelector(state=>state.user.details.User);
    const [lamo,setLamo] = useState(false)
    const menuHide = () =>{
        setLamo(!lamo);
    }
    const history = useHistory();
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
                    <h1 className="logo-name">Himawari Dinner</h1>
                </Link>
                <div className="menu-icon">
                    <label htmlFor="check">
                        <MenuIcon style={{height:25,width:25,cursor:"pointer"}} />
                    </label>
                </div>
                <input type="checkbox" id="check"/>
                <ul className="nav-links">
                    <Link to="/menu">
                        Menu
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/cart" >
                        <div className="cart-icon-div">
                            <span>{counter}</span>
                            <li onClick={menuHide}><ShoppingCartIcon style={{height:18,width:18}}/>Cart</li>
                        </div>
                   </Link>
                    <li  onClick={()=>setChris(!chris)}>
                        <Link to="#">
                            <AccountCircleIcon style={{width:25,height:25}}/>
                        </Link>
                        {chris?<ul className="inner-nav">
                            <li>{userDetails?userDetails.name:null}</li>
                            <li onClick={()=>toOrderPage()}>Orders</li>
                            <li onClick={()=>logOut()}>Sign out</li>
                        </ul>:null}
                    </li>
                    
                </ul>
            </nav>           
        );}
        else{
        return(
        <nav>
                <Link to="/">
                    <h1 className="logo-name">Himawari Dinner</h1>
                </Link>
                <div className="menu-icon">
                    <label htmlFor="check">
                        <MenuIcon style={{height:25,width:25,cursor:"pointer"}} />
                    </label>
                </div>
                <input type="checkbox" id="check"/>
                <ul className="nav-links">
                    <Link to="/menu">
                        Menu
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/cart" >
                        <div className="cart-icon-div">
                            <span>{counter}</span>
                            <li onClick={menuHide}><ShoppingCartIcon style={{height:18,width:18}}/>Cart</li>
                        </div>
                    </Link>
                    
                </ul>
            </nav>
        );
    }
    
}

export default Nav;