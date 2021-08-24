import React ,{useState } from 'react';
import {Button, Col, Container, Form, Row,Alert} from "react-bootstrap";

import Welcome from './Welcome';
// import {Route,Router,NavLink,HashRouter,BrowserRouter,Switch,useHistory} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route,useHistory} from "react-router-dom";

const LoginPage = () => {

    const  [email,setemail]=useState("")
    const  [password,setpassword]=useState("")
    const  [error,seterror]=useState("")

    function Submit(){

        if (email=="a@a.com" && password=="abc")
        {
        console.log("login sucessfull")
        setemail("userlogin");
        }
        else
        {
            seterror("error")
        }
    }
    function submithandle(e)
    {
e.preventDefault();
    }
    function logout(){
        setemail("");
        
    }
    return (
        <>
        {email==="userlogin"?<h1><Container><div class="alert alert-success" role="alert">
  Welcome Ankit!!
</div>  <Container/></Container><Button variant="success btn-block" style={{marginTop:"1rem"}} type="submit" onClick={logout}>
                                Login out
                            </Button></h1>: <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Admin Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        {error!=""?<div className="alert alert-danger" role="alert">
  In-Valid Username and Password
</div>:""}
  
                        <Form onSubmit={(e)=>submithandle(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
                            </Form.Group>

                            <Button variant="success btn-block" style={{marginTop:"1rem"}} type="submit" onClick={Submit}>
                                Login
                            </Button>
                        </Form>

                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021. All Rights Reserved.</h6>
            </Container>}
      
        </>
    );
};

export default LoginPage;