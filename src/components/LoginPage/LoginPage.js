import React, { useState ,pure} from 'react';
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import {BrowserRouter as Router ,Route ,Link} from "react-router-dom";
import Welcome from './Welcome';
import Contact from './Contact';
// import {Route,Router,NavLink,HashRouter,BrowserRouter,Switch,useHistory} from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

const LoginPage = (props) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")
    const [username, setusername] = useState("")

    function Submit() {

        if (email == "Ankit@Ankit.com" && password == "Ankit123") {
            // console.log("login sucessfull")
            setemail("userlogin");
            setusername("Ankit")
            localStorage.setItem('Name', 'Ankit');
        }
        else {
            seterror("error")
        }
    }
    function submithandle(e) {
        e.preventDefault();
    }
    function logout() {
        setemail("");
        seterror("")
        localStorage.setItem('Name', '');

    }
    // console.log(props.data.name)
    return (
        <>
  

            {email === "userlogin" ? <p>{localStorage.getItem('Name')=="Ankit"?<h1><Container><div class="alert alert-success" role="alert">
                Welcome Current Logged in User {username}!!
            </div>
            {/* <Router>
            <Button variant="info" className="pull-right"><Link  to="/welcome">Profile</Link></Button>
            <Button variant="warning"><Link  to="/Contact">Contact</Link></Button> 
            <Route exact path="/welcome" component={Welcome}/>
            <Route exact path="/Contact" component={Contact}/>
        </Router> */}
              <Container /></Container><Button variant="success btn-block" style={{ marginTop: "1rem" }} type="submit" onClick={logout}>
                    Logout
                </Button></h1>:""}</p> : <Container>
                <h1 className="shadow-sm text-primary mt-5 p-3 text-center rounded">Welcome To Login Page</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        {error != "" ? <div className="alert alert-danger" role="alert">
                            In-Valid Username and Password
                        </div> : ""}

                        <Form onSubmit={(e) => submithandle(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
                            </Form.Group>

                            <Button variant="success btn-block" style={{ marginTop: "1rem" }} type="submit" onClick={Submit}>
                                Login
                            </Button>
                        </Form>

                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright 2021. All Rights Reserved.</h6>
            </Container>}

        </>
    );
};

export default LoginPage;