import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import { fetchUserDetails } from '../actions/UserActions'
import axios from 'axios';



const Home=()=>{
    const [special,setSpecial] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchData());
    },[dispatch]);
    const history=useHistory();
    const about=()=>{
        history.push('/about');
    }
    const menu=()=>{
        history.push('/menu');
    }
    const zoomInProperties = {
        indicators: false,
        scale: 1.4,
    }

    const userId = localStorage.getItem('userId');

    const token = localStorage.getItem('token');
    const config= {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(()=>{
        axios.get(`https://my-first-resturant.herokuapp.com/user/${userId}`,config)
            .then(res=>dispatch(fetchUserDetails(res.data)))
            .catch(err=>console.log(err));
            // eslint-disable-next-line
        axios.get('https://my-first-resturant.herokuapp.com/products/getSpecial/true')
        .then(res=>{
            setSpecial(res.data.specialProducts);
        })
        .catch(err=>{
            console.log(err);
        })
        // eslint-disable-next-line 
    },[]);

    return(
        <>
        <section className="section first">
            <div className="quote">
                LIVE LONGER WITH HEALTHY FOODS
            </div>
            <div className="quote-div">
                <div className="text">
                    We believe in not only having delicious foods but nutritious foods that you can feel good about eating.
                </div>
                <div className="text">
                    Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.
                </div>
            </div>
            <div className="btn-div">
                    <button onClick={menu}>Menu</button>
                    <button onClick={about}>About us</button>

                </div>
        </section>
        <section className="section homebackground">
                <div className="special-header">
                    Order Online
                </div>
                <p className="info">We provide homemade delicious foods, fruits and sugar free sweets. We also have seperate kitchen for vegetarian and for meat lovers.</p>
                <p className="info">Our resturant is just opened and it's coverage is just our region. Don't worry! Soon we'll cover more regions as soon as possible.</p>
                <p className="info">We also provide lodging at reasonable price</p>
        </section>
        <section className="homebackground"> 
        <div className="special-header">
            Our Specials
        </div>
        <div className="card">
            {
                special.length===0?
                <p>Loading...</p>:
                <Zoom {...zoomInProperties}>
                    {
                        special.map((item)=>{
                            const a = `https://my-first-resturant.herokuapp.com/${item.productImage}`;
                            return(
                                <div key={item._id}>
                                    <img className="images" src={a}  alt={item.name}/>
                                    <div className="card-title">{item.name}</div>
                                    <p className="special-desc">{item.productDesc}</p>
                                </div>
                            );
                        })
                    }      
                </Zoom>    
            }
                
                
        </div>

        </section>

        </>
    );
}

export default Home;