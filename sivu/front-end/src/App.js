import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
//import 'react-bootstrap/dist/react-bootstrap.js';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar.js'
import ProductsList from './components/ProductsList';
import NewArrivals from './components/new-arrivals';
import Sales from './components/sales';
import About from './components/about';
import CreateProducts from './components/CreateProducts';
import submitResponse from './components/submitResponse';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "jquery";
import "popper.js"


function App() {
  return (
    <Router>
    <div className="App">
      {/* <div className="container-fluid"> */}
        <Navbar />
        <Route path ="/" exact component = {ProductsList} />
        <Route path ="/new-arrivals" component = {NewArrivals} />
        <Route path ="/sales" component = {Sales} />
        <Route path ="/about" component = {About} />
        <Route path ="/products" component = {CreateProducts} />
        <Route path="/submitResponse" component={submitResponse} />
        <img src={logo} className="App-logo" alt="logo" />
      {/* </div> */}
    </div>
    </Router>
  );
}

export default App;
