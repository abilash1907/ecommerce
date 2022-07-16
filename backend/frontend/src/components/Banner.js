import React, { useContext } from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import { Productcontext } from '../Productcontext';


const Banner = () => {
    const {items}=useContext(Productcontext)
    return (
        <Carousel >
        {
        items.map((item )=>{
            return <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={item.image}
            alt={item.id}
            height={600}
            />
            <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
            
    
            
        })
    }
       </Carousel>
    );
}

export default Banner;
