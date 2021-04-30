import React from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './HomePage'
import Header from './Header'
import NavBar from './NavBar'
import About from './About'
// import Products from './Products'
import ContactUs from './ContactUs'
// import {Switch, Route} from "react-router-dom";
// import { useTranslation } from 'react-i18next';



function App() {
  // const { t, i18n } = useTranslation();
 
  // function handleClick(lang){
  //   i18n.changeLanguage(lang);
  // }

  return (
    <div className="root">
      <Header/>
      {/* <button onClick={()=> handleClick('en')}> English </button>
      <button onClick={()=> handleClick('spa')}> Spanish </button>
      <p>{t('Translate.1')}</p> */}
      <HomePage/>
      <NavBar/>
      <About/>
      <ContactUs/>
    </div>

  );
}

export default App;
