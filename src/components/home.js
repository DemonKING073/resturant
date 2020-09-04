import React from 'react';
import {useHistory} from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import Chicken from '../assets/chicken.jpg';
import VegBalls from '../assets/VegieBalls.jpg';
import Juice from '../assets/juice.jpg';
import Cake from '../assets/lemonCake.png';

const Home=()=>{
    const history=useHistory();
    const about=()=>{
        history.push('/about');
    }
    const menu=()=>{
        history.push('/menu');
    }

    const  data = [{
        title: "Vegie Balls",
        desc: "dsfdsfdsf",
        url: VegBalls
      }, {
        title: "Spicy Chicken Legs",
        desc: "sdfsdfdsf",
        url: Chicken
      }, {
        title: "Lemon Cake",
        desc: "sdfdsfsd",
        url: Cake
      },  {
        title: "Banana Shake",
        desc: "sdfdsfdsfd",
        url: Juice
      }];
      const zoomInProperties = {
        indicators: false,
        scale: 1.4
      }
     

    return(
        <>
        <section className="section first">
            <div className="quote">
                LIVE LONGER WITH HEALTHY FOODS
            </div>
            <div className="text">
                We believe in not only having delicious foods but nutritious foods that you can feel good about eating.
            </div>
            <div className="btn-div">
                    <button onClick={menu}>Menu</button>
                    <button onClick={about}>About us</button>

                </div>
        </section>
        <section className="section second">
            <div className="text-area">
                <div className="header">
                    Order Online
                </div>
                <div className="order">
                    <p>Our resturant is just opened and it's coverage is just our region. Don't worry! Soon we'll cover more regions as soon as possible.</p>
                    <p>We provide homemade delicious foods, fruits and sugar free sweets. We also have seperate kitchen for vegetarian and for meat lovers.</p>
                </div>
                

            </div>
            <div className="fruit-background"></div>

        </section>
        <section className="section third"> 
        <div className="special-header">
            Our Specials
        </div>
        <div className="card">
                <Zoom {...zoomInProperties}>
                    {
                    data.map((item,index)=>{
                        return(
                            <div>
                                <img  className="images" src={item.url} key={index} alt={item.title}/>
                                <div className="card-title">{item.title}</div>
                            </div>
                        );
                    })
                    }
                        
                </Zoom>
                
        </div>

        </section>

        </>
    );
}

export default Home;