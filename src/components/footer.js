import React from 'react';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Insta from '../assets/Instagram.svg';
import Up from '../assets/up-arrow.svg';
const Footer=()=>{
    const scrollToTop = () =>{
        window.scrollTo({top:0, behavior: 'smooth'})
    }
    return(
        <footer>
            
            <div className="logo-name small">Himawari Dinner</div>
            <div className="footer-info">&copy;Dinner by Chris Thapa, Jhapa,Nepal</div>
            
            <div></div>
            <div className="icon-div">
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <img src={Up} alt="fuck yu" className="fa fa-arrow-up arrow-icon" />
                </div>
                <a  target="_blank noopener noreferrer" href="https://www.facebook.com/chris.thapa.3762"><img src={Facebook} alt="Facebook" /></a>
                <a target="_blank noopener noreferrer" href="https://twitter.com/ChrisThapa10"><img src={Twitter} alt="Twitter" /></a>
                <a target="_blank noopener noreferrer" href="https://www.instagram.com/dinbibek/"><img src={Insta} alt="Instagram" /></a>
            </div>
        </footer>
    );
}


export default Footer;