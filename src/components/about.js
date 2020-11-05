import React from 'react';
import Hima from '../assets/Himawari.png';

const About=()=>{
    return(
        <section className=" about">
            <div className="section-heading">
                About Us
            </div>
            <div className="about-container">
                <div className="about-text">
                    {/* <p className="small-margin">Our resturant provides healthy and fresh foods all day.</p>
                    <p>We provide homemade delicious foods, fruits and sugar free sweets.</p>
                    <p>We also have seperate kitchen for vegetarian and for meat lovers.</p>
                    <p>Our name inspired by Uzumaki Himawari.</p> */}
                    <h2>WHO ARE WE.</h2>
                    <p>There's nothing cookie-cutter about Himawari Dinner. Not our people. And definitely not the way we live life.
                        Around here, we don't settle for anythig less than food we're proud to serve. And we don't just clock in. Not when
                        we can also become our best, make friends.
                    </p>
                    <h2>WHAT WE'RE ABOUT.</h2>
                    <p>
                        At our Dinner, we don't just make delicious meals. We make people happy. Himawari Dinner was build on the belief that 
                        foods should be tasty as well as healthy, and we carry that belief into everything we do.
                    </p>
                    <h2>WHERE WE COME FROM.</h2>
                    <p>
                        In 2010, two brothers borrowed $600 from their mom to open a resturant at Birtamod, Jhapa. They named it Himawari Dinner, because
                        they were fucking weebs.
                    </p>
                    <p>    
                    Soon, the resturant grew. Why? The food's awesome here. The service felt like home. 
                    And the customers were treated like family.
                    </p>
                    <p>And we've been deliverying that same food and service ever since.</p>

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