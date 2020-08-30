import React from 'react';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Insta from '../assets/Instagram.svg';

const Footer=()=>{
    return(
        <footer>
            <div className="logo-name small">Himawari Dinner</div>
            <div className="footer-info">&copy;Dinner by Chris Thapa, Jhapa,Nepal</div>
            
            <div></div>
            <div className="icon-div">
                <img src={Facebook} alt="Facebook" />
                <img src={Twitter} alt="Twitter" />
                <img src={Insta} alt="Instagram" />
            </div>
        </footer>
    );
}


export default Footer;