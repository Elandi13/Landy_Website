import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useTranslation } from 'react-i18next';
import { FaPhoneSquare, FaFacebookSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"


export default function About() {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('en');
    const [isEnglish, setIsEnglish] = useState(true)
    
    
    function handleClick(lang){
        i18n.changeLanguage(lang);
        setLanguage(lang)
        if (lang === "spa"){
            setIsEnglish(false)
        } else {setIsEnglish(true)}
      }

    return (
        <div className="about-card">
           <Card className="mb-3" style ={{ color: "#000" }}>
            {!isEnglish ? <button onClick={()=> handleClick('en')}> English </button> :
            <button onClick={()=> handleClick('spa')}> Español </button>}
                <Card.Header>
                     {t('Header.1')}
                <Card.Body>
                    <Card.Title>
                    {t('Title.1')}
                    </Card.Title>

                    <Card.Text>
                     {t('Body.1')}
                    </Card.Text>
                    <Card.Title>
                        BBCOS
                    </Card.Title>
                    <Card.Text>
                     {t('Body2.2')}
                    </Card.Text>
                    <Card.Title>
                     {t('Title2.2')} 
                    </Card.Title>
                    <Card.Text>
                    <FaPhoneSquare /> 
                    <a href="tel: +1 718-381-0832" > (718) 381-0832 </a>
                        <br/>
                        <MdEmail/>
                    <a href={"mailto: landyshairpny@gmail.com "}> Email</a>
                         <br/>
                         <FaFacebookSquare/>
                    <a href={"https://www.facebook.com/Landys-Hair-Products-NY-361435273965286/"} > FaceBook </a>
                    </Card.Text>
                </Card.Body>
                </Card.Header>
            </Card>
        </div>
    )
}

