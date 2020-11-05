import React from 'react';




const Card=(props)=>{
    if(props!==undefined)
    {
        const Product = {
            name:props.item.name,
            price: props.item.price,
            imageUrl: props.item.imageUrl,
            desc: props.item.productDesc,
            _id: props.item._id,
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
                            props.checkCart(Product);
                            props.lamo(Product);
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