import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import { cartItemAdd } from '../actions/cartActions';




const Menu=()=>{
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
        slidesToShow: 4,
        slidesToScroll: 1
      };
    useEffect(()=>{
        dispatch(fetchData());
    // eslint-disable-next-line
    },[]);
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
                                    <Card  lamo={addToCart} id={item._id} item={item} title={item.name} img={item.imageUrl} price={item.price} desc={item.productDesc}/>
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
                                    <Card  lamo={addToCart} id={item._id} item={item}  title={item.name} img={item.imageUrl} price={item.price} desc={item.productDesc}/>
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
                                    <Card  lamo={addToCart} id={item._id} item={item}  title={item.name} img={item.imageUrl} price={item.price} desc={item.productDesc}/>
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
                                    <Card lamo={addToCart} id={item._id} item={item}  title={item.name} img={item.imageUrl} price={item.price} desc={item.productDesc}/>
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