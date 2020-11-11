import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { cartItemQuantity, cartItemQuantityDelete, cartTotalAdd,cartItemDelete } from '../actions/cartActions';


const Cart=()=>{
    const isLogged = useSelector(state=>state.user.isLogged);
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token')
    const config= {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const total = useSelector(state=>state.cart.total);

    const dispatch = useDispatch();
    const items = useSelector(state=>state.cart.items);
    
    const [quantity, setQuantity]=useState(0);

    const totalCalculate = () =>{
        let result = 0;
        if(items.length===0){
            dispatch(cartTotalAdd(result));
        }else{
            console.log('fuck');
            // eslint-disable-next-line
            items.map(item=>{
                const totalPrice= item.price*item.quantity;
                result=result+totalPrice;
            })
            console.log(result);
            dispatch(cartTotalAdd(result));
        }
    }
    // eslint-disable-next-line
    useEffect(()=>totalCalculate(),[quantity,onclick]);
    const checkquantity = (product) =>{
        dispatch(cartItemQuantityDelete(product.id));
        dispatch(cartItemQuantity(product));
    }
    
    const counter = useSelector(state=>state.cart.count);
    
    const DeletingCart = (e,id) =>{
        //eslint-disable-next-line
        items.map(item=>{
            if(id===item._id){
                dispatch(cartItemDelete(id));
                dispatch(cartItemQuantityDelete(id));
                totalCalculate();
            }   
        })
    }
    const placingOrder = () =>{
        if(isLogged){
            if(items.length===0){
                alert('fuck you man')
            }else{
                // eslint-disable-next-line
                items.map(item=>{
                    const product = {
                        productId:item._id,
                        email:email,
                        total:total,
                        imageUrl: item.imageUrl,
                    }
                axios.post('http://localhost:3000/orders/',product,config)
                })
                alert('Order Placed!');
            }
        }else{
            alert('Just Login man');
        }
            
    }
    return(
        <section className="section main-cart">
            <div className="short-width">
                <div className="white-space"></div>
                <div className="total">
                    <h2>Total<span>({counter}</span> items): $<span>{total}</span></h2>
                    <button onClick={placingOrder}>Order Now</button>
                </div>
                <div className="your-order">
                    <span className="odr-title">Your Order</span>
                    <span>Price</span>
                </div>
                {
                    items.length===0?
                    <h1 className="warning-cart">Please add Items from Menu <span role="img" aria-label="pic" style={{fontSize:50}}>&#128521;</span></h1>:
                    <div>
                        {items.map((item, index)=>{
                            return(
                                <div key={index} className="row">
                                    <div><img src={item.imageUrl} alt="chicken"/></div>
                                    <div>
                                        <div className="row-header">{item.name}</div>
                                        <div className="row-desc">{item.desc}</div>    
                                        <div className="row-qty">
                                            <select onChange={(e)=>{
                                                setQuantity(quantity+1);
                                                item.quantity=e.target.value;
                                                const CartQuantity = {id:item._id,quantity:e.target.value};
                                                checkquantity(CartQuantity);
                                            }}>
                                                <option value="1">Qty: 1</option>
                                                <option value="2">Qty: 2</option>
                                                <option value="3">Qty: 3</option>
                                                <option value="4">Qty: 4</option>
                                                <option value="5">Qty: 5</option>
                                                <option value="6">Qty: 6</option>
                                                <option value="7">Qty: 7</option>
                                                <option value="8">Qty: 8</option>
                                                <option value="9">Qty: 9</option>
                                                <option value="10">Qty: 10</option>
                                            </select>
                                            <button onClick={(e)=>{
                                                DeletingCart(e,item._id);
                                                setQuantity(quantity+1);
                                                }}>Delete</button>
                                        </div>
                                    </div>
                                    <div className="price">${item.price*item.quantity}
                                        <p className="multiply">{item.price}*{item.quantity}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                }
                
            </div> 
        </section>
    );
}

export default Cart;