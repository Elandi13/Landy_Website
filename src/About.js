import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function About(language, isEnglish) {
    
    return (
        <div className="about-card">
           {language.isEnglish ? <Card className="mb-3" style ={{ color: "#000" }}>
                {/* <Card.Img src= "https://image.shutterstock.com/image-illustration/about-us-linear-text-arrow-600w-407476792.jpg"/>  */}
                <Card.Header>
                     About us
                <Card.Body>
                    <Card.Title>
                        Who are we?
                    </Card.Title>
                    <Card.Text>
                        We are the lead distrubters in BBCOS hair products, based in New York City. We offer various products to keep your hair in prestine condition. We are here to help find the right product for you. Contact us today for more information! 
                    </Card.Text>
                    <Card.Title>
                        BBCOS
                    </Card.Title>
                    <Card.Text>
                    100% Made in Italy, The company and its production are located in Cherasco in the province of Cuneo. A strategic position capable of guaranteeing worldwide distribution and quickly reaching the main Italian cities including Milan, the capital par excellence of fashion and the most innovative trends in the hairstyle and beauty sector.
                    BBcos hair pro was born as a spokesperson for all questions of look and to be the best ally of hair stylists in their beauty salons. A high-end brand that creates and manufactures professional hair care and well-being products. The Made in Italy heart is the distinctive trait and the added value that allows us to confirm a style recognized all over the world.
                    </Card.Text>
                    <Card.Title>
                        Products
                    </Card.Title>
                    <Card.Text>
                        We offer many products 
                    </Card.Text>
                </Card.Body>
                </Card.Header>
            </Card> : <p> Hola </p>}
        </div>
    )
}
