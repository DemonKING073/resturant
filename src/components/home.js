import React from 'react';

const Home=()=>{
    return(
        <>
        <section className="section first">
            <div className="quote">
                LIVE LONGER WITH HEALTHY FOODS
            </div>
            <div className="text">
                We believe in not only having delicious foods but nutritious foods that you can feel good about eating.
            </div>
        </section>
        <section className="section second">
            <div className="text-area">
                <div className="header">
                    Order Online
                </div>
                <div className="order">
                    Our resturant is just opened and it's coverage is just our region. Don't worry! Soon we'll cover more regions as soon as possible.
                </div>
                <div className="btn-div">
                    <button>Order Now</button>
                    <button>Menu</button>
                </div>

            </div>
            <div className="fruit-background"></div>

        </section>
        <section className="section third"> 
        <div className="header">
            Our Specials
        </div>

        </section>

        </>
    );
}

export default Home;