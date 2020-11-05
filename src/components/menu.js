import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import { cartItemAdd } from '../actions/cartActions';




const Menu=()=>{
    let number = 0;
    const [check, setCheck] = useState(false);
    const Items = useSelector(state=>state.cart.items);
    const checkCart = (product) =>{
        const lamo = Items.map(item=>{
            if(item._id===product._id){
                number=1;
                return 1;
            }
            else{
                number=0;
                return 0;
            }
        });
        console.log(lamo);
        number===0?setCheck(false):setCheck(true);
    }
    const dispatch = useDispatch();
    const addToCart = (product) =>{
        checkCart(product);
        if(check===false){
            dispatch(cartItemAdd(product));
            setCheck(true);
        }
        else{
            alert('Item already Added');
        }
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    
    useEffect(()=>{
        dispatch(fetchData());
    },[dispatch,Items]);
    const fastFoods = useSelector(state=>state.data.data.products);
    return(
        <section className="section menu">
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
                        fastFoods===undefined?
                        <h2>loading...</h2>:
                        <Slider {...settings}>
                            {fastFoods.map((item,index)=>{
                                return(
                                    <div key={index}>
                                    <Card checkCart={checkCart} lamo={addToCart} id={item._id} item={item} title={item.name} img={item.imageUrl} price={item.price} desc={item.productDesc}/>
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
                        fastFoods===undefined?
                        <h2>loading...</h2>:
                        <Slider {...settings}>
                            {fastFoods.map((item, index)=>{
                                return(
                                    <div key={index}>
                                    <Card checkCart={checkCart} lamo={addToCart} id={item._id} item={item}  title={item.name} img={item.imageUrl} price={item.price} desc={item.productDesc}/>
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
                        fastFoods===undefined?
                        <h2>loading...</h2>:
                        <Slider {...settings}>
                            {fastFoods.map((item, index)=>{
                                return(
                                    <div key={index}>
                                    <Card checkCart={checkCart} lamo={addToCart} id={item._id} item={item}  title={item.name} img={item.imageUrl} price={item.price} desc={item.productDesc}/>
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
                        fastFoods===undefined?
                        <h2>loading...</h2>:
                        <Slider {...settings}>
                            {fastFoods.map((item,index)=>{
                                return(
                                    <div key={index}>
                                    <Card checkCart={checkCart} lamo={addToCart} id={item._id} item={item}  title={item.name} img={item.imageUrl} price={item.price} desc={item.productDesc}/>
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