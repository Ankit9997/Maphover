import logo from './logo.svg';
import React ,{useState } from 'react';
import './App.css';
import LoginPage from "./components/LoginPage/LoginPage";
import LoginForm from "./components/LoginPage/LoginForm";
import Contact from "./components/LoginPage/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router ,Route ,Link} from "react-router-dom";
// import ResturantCreate from "./components/API/ResturantCreate";
// import ResturantDetails from "./components/API/ResturantDetails";
// import ResturantList from "./components/API/ResturantList";
// import ResturantSearch from "./components/API/ResturantSearch";
// import ResturantUpdate from "./components/API/ResturantUpdate";
// import Home from "./components/API/Home";

function App() {

  const adminUser={
    email:"admin@admin.com",
    password:"admin123"
  }
  const [user ,setUser]=useState({name:"",email:""})
  const [error, setError]=useState("");

  const Login=details=>{
    console.log(details)
    if(details.email==adminUser.email && details.password==adminUser.password)
    {
      console.log("you are login")
      setUser({name:details.name,email:details.email})
    }
    else
    {
      setError("Error");
      console.log("Invalid");
    
    }
  }

  const Logout=()=>{
    console.log("Logout")
    setUser({name:"",email:""})
    setError("");
  }
  return (
    <div className="App">
           {/* {(user.email!="")?(<div className="welcome">
             <h2>Welcome,<span>{user.name}</span></h2>
             <button onClick={Logout}>Logout</button>
           </div>):<LoginForm Login={Login} error={error}/>
           } */}
           <LoginPage data={{name:"ankit",email:"sinha"}}/>
           {/* <Contact/> */}

           {/* <Router>
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/Create">Create</Link></li>
               <li><Link to="/Details">Details</Link></li>
               <li><Link to="/Search">Search</Link></li>
               <li><Link to="/Update">Update</Link></li>
               <li><Link to="/List">List</Link></li>
             </ul>

             
             <Route path="/Create">
               <ResturantCreate/>
             </Route>
             <Route path="/Details">
               <ResturantDetails/>
             </Route>
             <Route path="/Search">
               <ResturantSearch/>
             </Route>
             <Route path="/Update">
               <ResturantUpdate/>
             </Route>
             <Route path="/List">
               <ResturantList/>
             </Route>
             <Route path="/">
               <Home/>
             </Route>
           </Router> */}
    </div>
  );
}

export default App;
