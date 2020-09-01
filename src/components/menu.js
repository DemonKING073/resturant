import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './card';
import Image1 from '../assets/VegieBalls.jpg';
import Image2 from '../assets/chicken.jpg';


const Menu=()=>{

    const fastFoods=[
        {
            imgSrc:Image1,
            title:'Vegie Rolls',
            price:200,
            desc:'',
        },
        {
            imgSrc:Image2,
            title:'Chicken',
            price:250,
            desc:'',
        },
        {
            imgSrc:Image2,
            title:'Chicken',
            price:250,
            desc:'',
        },
        {
            imgSrc:Image2,
            title:'Chicken',
            price:250,
            desc:'',
        },
        {
            imgSrc:Image2,
            title:'Chicken',
            price:250,
            desc:'',
        },
        {
            imgSrc:Image2,
            title:'Chicken',
            price:250,
            desc:'',
        },
    
    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        <section className="section menu">
            <div className="short-width">
                <div className="section-heading">
                    Menu
                </div>
                <div className="food-container">
                    <span className="food-title">Fast Foods</span>
                    <span className="explore">See All</span>
                </div>
                <div className="food-lists">
                    <Slider {...settings}>
                    {fastFoods.map((item,index)=>{
                        return(
                            <>
                            <Card key={index} title={item.title} img={item.imgSrc} price={item.price} desc={item.desc}/>
                            </>
                        );
                    })}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Menu;