import React from 'react';
import { Navbar,Container,Form,FormControl,Button } from 'react-bootstrap';
const Navbars = () => {
    return (
        <Navbar bg="light" expand="lg" style={{position:'fixed',zIndex:1,width:'100%'}}>
        <Container fluid>
            <Navbar.Brand href="#" style={{fontWeight:'bolder'}}>Shop Cart</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
           
            <Form className="d-flex" style={{marginRight:'1rem'}}>
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Navbar.Text >
                Signed in as: <a href="#login">Name</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navbars;
