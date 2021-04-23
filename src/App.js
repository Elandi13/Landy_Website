import React from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './HomePage'
import Header from './Header'
import NavBar from './NavBar'
import About from './About'
import Products from './Products'
import ContactUs from './ContactUs'
import {Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="root">
      <Route>
        <Header/>
        
        <NavBar/>
      </Route>

      <Switch>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/homepage">
          <HomePage/>
        </Route>

        <Route exact path="/contact">
          <ContactUs/>
        </Route>

        <Route exact path="/products">
          <Products/>
        </Route>

      </Switch>
    </div>

  );
}

export default App;
