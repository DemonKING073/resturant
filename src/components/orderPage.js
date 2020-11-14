import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, delOrder } from '../actions/UserActions'
import SendIcon from '@material-ui/icons/Send';
import { toast } from 'react-toastify';

toast.configure();
const OrderPage = () =>{
    const UserDetails = useSelector(state=>state.user.details.User);
    const items = useSelector(state=>state.user.orders)
    const dispatch = useDispatch()
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const config= {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    
   
    const deleteOrder = (orderId) =>{
        axios.delete('http://localhost:3000/orders/'+orderId,config)
            .then(res=>{
                console.log(res);
                alert('Order Deleted!')
            })
            .catch(err=>console.log(err.resposne));
    }
    useEffect(()=>{
        axios.get(`http://localhost:3000/orders/${email}`,config)
            .then(res=>{
                dispatch(addOrder(res.data.orders))
                console.log(res)
            })
            .catch(err=>console.log(err));
        
    //eslint-disable-next-line
    },[]);
    return(
        <div className="order-page">
            <div className="white-space"></div>
            <div className="total">
                <h3>Name: <span>{UserDetails?UserDetails.name:null}</span></h3>
                <h3>Email: {UserDetails?UserDetails.email:null}</h3>
                <h3>Your Orders:</h3>
            </div>
            <div className="your-final-order">
                <span className="odr-title"><SendIcon/>Items</span>
            </div>
            {
                items.length===0?<h2 className="order-warning">No Orders!</h2>:items.map((item,index)=>{
                    return(
                        <div className="order-box" key={index}>
                            <div>
                                <h2>Order: {index}</h2>
                                <div className="order-id">Order Id: {item._id}</div>
                                <div className="order-total">Total Price: {item.total}</div>
                                <div className="order-total">Products:<ul> {item.products.map((product,index)=>{
                                    return(<li key={index}>{product.name}</li>)
                                })}</ul></div>
                            </div>
                            <button onClick={()=>{
                                    deleteOrder(item._id);
                                    dispatch(delOrder(item._id));
                                    }} className="order-btn">Remove</button>
                        </div>
                    )
                })
            }
            
            {/* {items.length===0?<h2 className="order-warning">No Orders!</h2>:items.map((item, index)=>{
                return(
                        <div key={index} className="order-box">
                            <div>
                                <img className="order-image" src={item.imageUrl} alt={item.product.name} />
                            </div>
                            <div className="order-details">
                                <div className="order-name">Product: {item.product.name}</div>
                                <div className="order-id ">Order Id: {item._id}</div>
                                <div className="order-total">Total: ${item.total}</div>
                            </div>
                            <div>
                                <button className="order-btn" onClick={()=>{
                                    deleteOrder(item._id);
                                    dispatch(delOrder(item._id));
                                    }}>Delete Order</button>
                            </div>
                            
                        </div>
                    );
                })} */}
        </div>
    );
}

export default OrderPage;