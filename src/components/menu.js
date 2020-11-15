import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import { cartItemAdd } from '../actions/cartActions';
import axios from 'axios';




const Menu=()=>{
    const [drinks, setDrinks] =  useState([]);
    const [fFood, setFFood] = useState([]);
    const [special,setSpecial] = useState([]);
    const [meal, setMeal] = useState([]);
    let x= 0;
    const [width,setWidth] = useState(1366);
    if(width>1365){
        x=4
    }else if(width<1355 && width>902){
        x = 3
    }else if(width<902 && width>400){
        x=2
    }else{
        x=1
    }
    const Items = useSelector(state=>state.cart.items);
    const dispatch = useDispatch();
    const addToCart = (product) =>{
        const result = Items.find(item => item._id === product._id);
        if(result===undefined){
            dispatch(cartItemAdd(product));
        }
        else{
            alert('Item already Added');
        }
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: x,
         //Change this to x
        slidesToScroll: 1
      };
    useEffect(()=>{
        dispatch(fetchData());
        setWidth(window.innerWidth);
        axios.get('http://localhost:3000/products/getSpecial/true')
        .then(res=>{
            setSpecial(res.data.specialProducts);
        })
        .catch(err=>{
            console.log(err);
        })
        axios.get('http://localhost:3000/products/category/fastFood')
        .then(res=>{
            setFFood(res.data.Products);
        })
        .catch(err=>{
            console.log(err);
        })
        axios.get('http://localhost:3000/products/category/meals')
        .then(res=>{
            setMeal(res.data.Products);
        })
        .catch(err=>{
            console.log(err);
        })
        axios.get('http://localhost:3000/products/category/drinks')
        .then(res=>{
            setDrinks(res.data.Products);
        })
        .catch(err=>{
            console.log(err);
        })
    // eslint-disable-next-line
    },[]);
    return(
        <section className="section menu">
            <div className="white-space"></div>
            <div className="short-width">
                <div className="section-heading">
                    Menu
                </div>
                <div className="food-container">
                    <span className="food-title">Specials</span>
                    <span className="explore">See All</span>
                </div>
                <div className="food-lists">
                    {
                        special.length===0?
                        <h2>No Data</h2>:
                        <Slider {...settings}>
                            {special.map((item,index)=>{
                                const a = `http://localhost:3000/${item.productImage}`;
                                return(
                                    <div key={index}>
                                    <Card  lamo={addToCart} id={item._id} item={item} title={item.name} img={a} price={item.price} desc={item.productDesc}/>
                                    </div>
                                )
                            })}
                        </Slider>
                    }
                </div>
                <div className="food-container">
                    <span className="food-title">Fast Foods</span>
                    <span className="explore">See All</span>
                </div>
                <div className="food-lists">
                {
                        fFood.length===0?
                        <h2>No Data</h2>:
                        <Slider {...settings}>
                            {fFood.map((item, index)=>{
                                const a = `http://localhost:3000/${item.productImage}`
                                return(
                                    <div key={index}>
                                    <Card  lamo={addToCart} id={item._id} item={item}  title={item.name} img={a} price={item.price} desc={item.productDesc}/>
                                    </div>
                                )
                            })}
                        </Slider>
                    }
                </div>
                <div className="food-container">
                    <span className="food-title">Meals</span>
                    <span className="explore">See All</span>
                </div>
                <div className="food-lists">
                {
                        meal.length===0?
                        <h2>No Data</h2>:
                        <Slider {...settings}>
                            {meal.map((item, index)=>{
                                const a = `http://localhost:3000/${item.productImage}`
                                return(
                                    <div key={index}>
                                    <Card  lamo={addToCart} id={item._id} item={item}  title={item.name} img={a} price={item.price} desc={item.productDesc}/>
                                    </div>
                                )
                            })}
                        </Slider>
                    }
                </div>
                <div className="food-container">
                    <span className="food-title"><i className="fa fa-beer"></i>Drinks</span>
                    <span className="explore">See All</span>
                </div>
                <div className="food-lists">
                    {
                        drinks.length===0?
                        <h2>No Data</h2>:
                        <Slider {...settings}>
                            {drinks.map((item,index)=>{
                                const a = `http://localhost:3000/${item.productImage}`
                                return(
                                    <div key={index}>
                                    <Card lamo={addToCart} id={item._id} item={item}  title={item.name} img={a} price={item.price} desc={item.productDesc}/>
                                    </div>
                                )
                            })}
                        </Slider>
                    }
                </div>

            </div>
        </section>
    );
}

export default Menu;