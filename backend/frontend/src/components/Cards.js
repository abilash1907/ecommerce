import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import {Card,Button} from 'react-bootstrap';
import { Productcontext } from '../Productcontext';

const Cards = () => {
    const {items,setItems,navigate,setId}=useContext(Productcontext)
    const categorySelect=(category)=>{
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(res=>setItems(res.data))
        .catch(err=>console.log(err.message))
    }
    const fetchData=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>setItems(res.data))
        .catch(err=>console.log(err.message))
    }
    useEffect(() => {
       const getDetails=async()=>{

           await fetchData()
       }
       getDetails()
    }, []);
    
    return (
        <div className='row' style={{display:'flex'}}>
            <div className='buttons d-flex justify-content-center mt-2'>
            <Button variant="outline-secondary" size='sm' onClick={(e)=>fetchData()} className='me-2'>All</Button>{' '}
            <Button variant="outline-secondary" size='sm' onClick={(e)=>categorySelect("men's clothing")}  className='me-2'>Men's Clothing</Button>{' '}
            <Button variant="outline-secondary" size='sm' onClick={(e)=>categorySelect("women's clothing")}  className='me-2'>Women's Clothing</Button>{' '}
            <Button variant="outline-secondary" size='sm' onClick={(e)=>categorySelect("jewelery")} className='me-2'>Jewelery</Button>{' '}
            <Button variant="outline-secondary" size='sm' onClick={(e)=>categorySelect("electronics")}  className='me-2'>Electronic</Button>
            </div>
           {
           
            items.map((item,i)=>{
            return <Card className='col-3' key={item.id} style={{ margin:"2rem", width: '15rem',textAlign:'center' }}>
            <Card.Img variant="top" src={item.image} height='140rem' />
            <Card.Body >
                <Card.Title >{item.title.substring(0,12)}...</Card.Title>
                <Card.Text style={{fontWeight:'bold'}} >
                ${item.price}
                </Card.Text>
                <Button variant="outline-secondary" onClick={(e)=>{
                    setId(i)
                    navigate(`product/${i}`)
                }}>Buy Now</Button>
            </Card.Body>
            </Card>
            })
           }
           
        </div>
    );
}

export default Cards;
