import {Link} from 'react-router-dom';
import Cart from '../assets/cart.svg';
import React from 'react';

const Nav=()=>{
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
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/cart" className="nav-cart-link">
                            <div className="cart-icon-div">
                                <img src={Cart} alt="logo"/>
                                <span className="counter">9</span>
                            </div>
                            <div><li>Cart</li></div>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;