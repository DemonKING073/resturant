import React from 'react';
import Image from '../assets/chicken.jpg';

const Cart=()=>{
    return(
        <section className="section main-cart">
            <div className="short-width">
                <div className="white-space"></div>
                <div className="total">
                    <h2>Total<span>(3</span> items): $<span>200</span></h2>
                    <button>Order Now</button>
                </div>
                <div className="your-order">
                    <span className="odr-title">Your Order</span>
                    <span>Price</span>
                </div>
                <div className="row">
                    <div><img src={Image} alt="chicken"/></div>
                    <div>
                        <div className="row-header">Spicy Chicken Legs</div>
                        <div className="row-desc">It's Beans and rice balls served in rich masala sauce with incredable flavors.</div>    
                        <div className="row-qty">
                            <select>
                                <option>Qty: 1</option>
                                <option>Qty: 2</option>
                                <option>Qty: 3</option>
                                <option>Qty: 4</option>
                                <option>Qty: 5</option>
                                <option>Qty: 6</option>
                                <option>Qty: 7</option>
                                <option>Qty: 8</option>
                                <option>Qty: 9</option>
                                <option>Qty: 10</option>
                            </select>
                            <button>Delete</button>
                        </div>
                    </div>
                   
                    <div className="price">$200</div>
                </div>
                <div className="row">
                    <div><img src={Image} alt="chicken"/></div>
                    <div>
                        <div className="row-header">Spicy Chicken Legs</div>
                        <div className="row-desc">It's Beans and rice balls served in rich masala sauce with incredable flavors.</div>    
                        <div className="row-qty">
                            <select>
                                <option>Qty: 1</option>
                                <option>Qty: 2</option>
                                <option>Qty: 3</option>
                                <option>Qty: 4</option>
                                <option>Qty: 5</option>
                                <option>Qty: 6</option>
                                <option>Qty: 7</option>
                                <option>Qty: 8</option>
                                <option>Qty: 9</option>
                                <option>Qty: 10</option>
                            </select>
                            <button>Delete</button>
                        </div>
                    </div>
                   
                    <div className="price">$200</div>
                </div>
                <div className="row">
                    <div><img src={Image} alt="chicken"/></div>
                    <div>
                        <div className="row-header">Spicy Chicken Legs</div>
                        <div className="row-desc">It's Beans and rice balls served in rich masala sauce with incredable flavors.</div>    
                        <div className="row-qty">
                            <select>
                                <option>Qty: 1</option>
                                <option>Qty: 2</option>
                                <option>Qty: 3</option>
                                <option>Qty: 4</option>
                                <option>Qty: 5</option>
                                <option>Qty: 6</option>
                                <option>Qty: 7</option>
                                <option>Qty: 8</option>
                                <option>Qty: 9</option>
                                <option>Qty: 10</option>
                            </select>
                            <button>Delete</button>
                        </div>
                    </div>
                   
                    <div className="price">$200</div>
                </div>
                <div className="row">
                    <div><img src={Image} alt="chicken"/></div>
                    <div>
                        <div className="row-header">Spicy Chicken Legs</div>
                        <div className="row-desc">It's Beans and rice balls served in rich masala sauce with incredable flavors.</div>    
                        <div className="row-qty">
                            <select>
                                <option>Qty: 1</option>
                                <option>Qty: 2</option>
                                <option>Qty: 3</option>
                                <option>Qty: 4</option>
                                <option>Qty: 5</option>
                                <option>Qty: 6</option>
                                <option>Qty: 7</option>
                                <option>Qty: 8</option>
                                <option>Qty: 9</option>
                                <option>Qty: 10</option>
                            </select>
                            <button>Delete</button>
                        </div>
                    </div>
                   
                    <div className="price">$200</div>
                </div>
            </div> 
        </section>
    );
}

export default Cart;