
import React,{useContext,useState} from 'react';
import { Productcontext } from '../Productcontext';
import { Button,Form,Modal } from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Payment = () => {
    const {token,card,items,id,show,setShow}=useContext(Productcontext)
    const handleClose = () => setShow(false);
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [street,setStreet]=useState("")
    const [city,setCity]=useState("")
    const [state,setState]=useState("")
    const [pincode,setPincode]=useState(null)
    const [country,setCountry]=useState("")
    const [phonenumber,setPhonenumber]=useState(null)
    const [response,setResponse]=useState(false)
    
    const handSubmit=(e)=>{
        e.preventDefault()
        console.log(card)
        const data={
            "card":{
                "name":firstname,
                "number":card.number,
                "expiry_month":card.expiry_month,
                "expiry_year":card.expiry_year,
                "cvd":card.cvd
        
            },
            "billing":{
                "name":firstname,
                "address_line1":street,
                "address_line2":"",
                "city":city,
                "province":state,
                "country" :country,
                "postal_code" :pincode
            }
        }
        axios.post("http://localhost:8000/profile/",data,{
      headers:{
        "content":"application/json"
      }
    })
     .then(res=>{
      res.data? setResponse(true) : toast.error("Please give vaild details",{autoClose:10000,position: toast.POSITION.TOP_CENTER})
    })
  .catch(err=>{
    toast.error(`${err.message}`,{autoClose:10000,position: toast.POSITION.TOP_CENTER})
    setResponse(false)
})
    }
    const handPay=(e)=>{
        e.preventDefault()
        const data={
            "amount":items[id].price,
            "payment_method":"card",
            "card":{
                "name":firstname,
                "number":card.number,
                "expiry_month":card.expiry_month,
                "expiry_year":card.expiry_year,
                "cvd":card.cvd
        
            }
            
        }
        axios.post("http://localhost:8000/payment/",data,{
      headers:{
        "content":"application/json"
      }
    })
     .then(res=>{
      res.data?setShow(true): toast.error("Payment Failed",{autoClose:10000,position: toast.POSITION.TOP_CENTER})
       
    })
  .catch(err=>{
    toast.error(`${err.message}`,{autoClose:10000,position: toast.POSITION.TOP_CENTER})
    })
}
    
    const Profilesuccess=()=>{
       
        return(
            <div style={{align:'center',textAlign:'center'}} >
                  <h2>Payment  profile is ready</h2>
                  <Button  variant='info' onClick={(e)=>handPay(e)} >Pay ${items[id].price}</Button>
                  {show? 
                    <Modal show={show} onHide={handleClose} >
                    <Modal.Body>
                        <h3>Payment Successfull</h3>
                        <Button variant='dark' onClick={()=>setShow(!show)}>Ok</Button>
                    </Modal.Body>
                    
                  </Modal>:null
                  }
            </div>
        )
    }
    console.log((items[id].price).toFixed(2))
    return (
        <div style={{align:'center',textAlign:'center',alignContent:'center'}} >
            {response? <Profilesuccess/>:
            <div> 
            <h1>Shopping Address </h1>
            <div style={{width:'70%',justifyContent:'center',textAlign:'center',alignContent:'center'}}>
            <Form onSubmit={(e)=>handSubmit(e)}>
            <div className="row">
            <Form.Group className="mb-3 col-md-6 col-6" controlId="formBasicEmail">
                
                <Form.Control onChange={(e)=>setFirstname(e.target.value)} type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6 col-6" controlId="formBasicPassword">
                
                <Form.Control onChange={(e)=>setLastname(e.target.value)} type="text" placeholder="Last Name" />
            </Form.Group>
            </div>
            <div className="row">
            <Form.Group className="mb-3 col-md-12 col-12" controlId="formBasicPassword">
                
                <Form.Control onChange={(e)=>setStreet(e.target.value)} type="text" placeholder="Street Address" />
            </Form.Group>
            </div>
            <div className="row">
            <Form.Group className="mb-3 col-md-6 col-6" controlId="formBasicPassword">
                
                <Form.Control onChange={(e)=>setCity(e.target.value)} type="text " placeholder="City" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6 col-6" controlId="formBasicPassword">
                
                <Form.Control onChange={(e)=>setState(e.target.value)} type="text" placeholder="State" maxLength={2}/>
            </Form.Group>
            </div>
            <div className="row">
            <Form.Group className="mb-3 col-md-6 col-6" controlId="formBasicPassword">
                
                <Form.Control onChange={(e)=>setPincode(e.target.value)} type="text" placeholder="Pin Code" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6 col-6" controlId="formBasicPassword">
               
                <Form.Control onChange={(e)=>setCountry(e.target.value)} type="text" placeholder="Country" maxLength={2}/>
            </Form.Group>
            </div>
            <div className="row">
            <Form.Group className="mb-3 col-md-12 col-12" controlId="formBasicPassword">
                
            <Form.Control onChange={(e)=>setPhonenumber(e.target.value)} type="text" placeholder="Phone Number" />
            </Form.Group>
            </div>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
            </div>
            }
        </div>
    );
}

export default Payment;
