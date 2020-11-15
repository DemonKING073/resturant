import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { cartItemQuantity } from '../actions/cartActions';



const Card=(props)=>{
    const dispatch = useDispatch();
    const CartItems = useSelector(state=>state.cart.items);
    const Checking = (product) =>{
        const result = CartItems.find(item => item._id === product.id);
        if(result===undefined){
            dispatch(cartItemQuantity(product));
        }
        else{
            console.log('already exists')
        }
    }
    
    if(props!==undefined)
    {
        const Product = {
            name:props.item.name,
            price: props.item.price,
            imageUrl: props.img,
            desc: props.item.productDesc,
            _id: props.item._id,
            quantity:1,
        }
        return(
            
            <div className="card-menu">
                <img src={props.img} alt={props.title} />
                <h1 className="menu-title">{props.title}</h1>
                <div className="card-bottom">
                    <div >
                        Price: $<span >{props.price}</span>
                    </div>
                    <div>
                        <button onClick={()=>{
                            props.lamo(Product);
                            const QuantityCheck = {id:Product._id,quantity:Product.quantity};
                            Checking(QuantityCheck);
                        }} 
                        className="cart-btn">Add Item</button>
                    </div>
                </div>
            </div>
        );
    }
    
    else
    return(
        <div>
            Loading
        </div>
    );
        
    
    
}

export default Card;