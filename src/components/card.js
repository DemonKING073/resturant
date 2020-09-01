import React from 'react';

const Card=(props)=>{
    if(props!==undefined)
    {
        
        console.log(props);
        return(
        
            <div className="card-menu">
                <img src={props.img} alt={props.title} />
                <h1 className="menu-title">{props.title}</h1>
                <div className="card-bottom">
                    <div >
                        Price: $<span >{props.price}</span>
                    </div>
                    <div>
                        <button className="cart-btn">Add Item</button>
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