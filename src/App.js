import React, {useState} from 'react';
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
import { useTranslation } from 'react-i18next';



function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("English")
  const [isEnglish, setIsEnglish] = useState(true)


  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  function handleToggleLanguage(){
      if(language === "English"){
        setLanguage("Spanish")
        setIsEnglish(false)
      } else {
        setLanguage("English")
        setIsEnglish(true)}
  
      console.log(isEnglish)
    }


  return (
    <div className="root">
      <Header/>
      <button onClick={handleToggleLanguage}>Toggle Language</button>
      <button onClick={()=> handleClick('en')}> English </button>
      <button onClick={()=> handleClick('spa')}> Spanish </button>
      <p>{t('Translate.1')}</p>
      {/* <p>{t('This.1')}</p>
      <p>{t('Please.1')}</p> */}

      <NavBar/>
      <About language={language} isEnglish={isEnglish}/>
      <ContactUs/>
    </div>

  );
}

export default App;
