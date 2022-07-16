import React,{useContext}from 'react';
import {Container,Row,Col, Button} from 'react-bootstrap';
import {IoMdArrowRoundBack} from 'react-icons/io';
import {AiOutlinePlus } from 'react-icons/ai';
import { Productcontext } from '../Productcontext';
import Modals from '../Pages/Modals';

const Showproduct = () => {
    const {id,items,setId,show,setShow}=useContext(Productcontext)
    
    return (
        
        <div className='m-5'>
        
            
        
        <div className='row ' style={{margin:'2rem',height:'30rem'}} >
           <div className='col-md-6 col-12 col-sm-12 pt-5'>
            <img src={items[id].image} alt='product picture' style={{minHeight:'10rem',height:'20rem', width:'20rem',justifyContent:'center'}}/>
           </div>
            <div className="col-md-6 col-12 col-sm-12 pt-5 " >
                <h3>{items[id].title}</h3>
                <p>{items[id].description}</p>
                <b>{items[id].category}</b>
                <div className="row mt-3">
                <div className="col-md-6 col-6">
                <h5>Price : ${items[id].price}</h5>
                </div>
                <div className="col-md-6 col-6 ">
                    <Button variant='secondary' size='sm' onClick={()=>setShow(!show)}>Add Cart <AiOutlinePlus/></Button>
                </div>
                </div>
                
            </div>
            </div>

            {show && <Modals />}
        </div>
        
        
    );
}

export default Showproduct;
