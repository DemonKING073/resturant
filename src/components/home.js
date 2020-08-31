import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import Chicken from '../assets/chicken.jpg';
import VegBalls from '../assets/VegieBalls.jpg';
import Juice from '../assets/juice.jpg';
import Cake from '../assets/lemonCake.png';

const Home=()=>{
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
        indicators: true,
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
        </section>
        <section className="section second">
            <div className="text-area">
                <div className="header">
                    Order Online
                </div>
                <div className="order">
                    Our resturant is just opened and it's coverage is just our region. Don't worry! Soon we'll cover more regions as soon as possible.
                </div>
                <div className="btn-div">
                    <button>Order Now</button>
                    <button>Menu</button>
                </div>

            </div>
            <div className="fruit-background"></div>

        </section>
        <section className="section third"> 
        <div className="special-header">
            Our Specials
        </div>
        <div className="container">
            <div className="card">
                <Zoom {...zoomInProperties}>
                    {
                    data.map((item,index)=>{
                        return(
                            <div className="card">
                                <img  className="images" src={item.url} key={index} alt={item.title}/>
                                <div className="card-text">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        );
                    })
                    }
                        
                </Zoom>
                
            </div>
            
        </div>

        </section>

        </>
    );
}

export default Home;