import React from 'react';
import Hima from '../assets/Himawari.png';

const About=()=>{
    return(
        <section className="section about">
            <div className="section-heading">
                About Us
            </div>
            <div className="about-container">
                <div className="about-text">
                    <p>Our resturant provides healthy and fresh foods all day.</p>
                    <p>We provide homemade delicious foods, fruits and sugar free sweets.</p>
                    <p>We also have seperate kitchen for vegetarian and for meat lovers.</p>
                    <p>Our name inspired by Uzumaki Himawari.</p>
                </div>
                <div className="himawari">
                    <p>Uzumaki Himawari </p>  
                    <img src={Hima} alt="Himawari"/>  
                                
                </div>
            </div>
            
        </section>
    );
}

export default About;