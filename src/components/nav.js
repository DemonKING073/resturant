import {Link} from 'react-router-dom';
import Cart from '../assets/cart.svg';
import React from 'react';
import { useSelector } from 'react-redux';

const Nav=()=>{
    const counter = useSelector(state=>state.cart.count)
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

export default Nav;