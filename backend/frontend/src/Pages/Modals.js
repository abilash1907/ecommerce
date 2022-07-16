import React, { useContext, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import {Form,Button} from 'react-bootstrap'
import { Productcontext } from '../Productcontext';
import './Modals.css'
import {toast} from 'react-toastify'
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

function Example(props) {
  const {id,items,show,setShow,setToken,navigate,setCard,token}=useContext(Productcontext)
  const [cardnumber,setCardnumber]=useState("")
  const [month,setMonth]=useState("")
  const [year,setYear]=useState("")
  const [cvd,setCvd]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handSubmit=(e)=>{
    e.preventDefault()
    const data={"number":cardnumber,"expiry_month":month,"expiry_year":year,"cvd":cvd}
    setCard(data)
    axios.post("http://localhost:8000/fetch/",data,{
      headers:{
        "content":"application/json"
      }
    })
     .then(res=>{
      setToken(res.data.token)

      navigate('payment_profile/') 
    })
  .catch((err)=>toast.error(`${err.message}`,{autoClose:10000,position: toast.POSITION.TOP_CENTER}))
  setShow(false)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{items[id].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e)=>handSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicText">
            
            <Form.Control type="text" onChange={(e)=>setCardnumber(e.target.value)} placeholder="Card Number" maxLength={16} minLength={16}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            
            <Form.Control type="text" onChange={(e)=>setMonth(e.target.value)} placeholder="Month Ex:02" maxLength={2} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" onChange={(e)=>setYear(e.target.value)} placeholder="Year Ex:22" maxLength={2}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" onChange={(e)=>setCvd(e.target.value)} placeholder="cvd" maxLength={3}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Pay
          </Button>
        </Form>
        </Modal.Body>
        
      </Modal>
      
    </>
  );
}

export default Example;