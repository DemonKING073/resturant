import {Link} from 'react-router-dom';
import React from 'react';

const Nav=()=>{
    return(
        <nav>
            <Link to="/">
                <div className="logo-name">Himawari Dinner</div>
            </Link>
            <div className="nav-links">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/menu">
                        <li>Menu</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;