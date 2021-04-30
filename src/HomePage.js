import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'

export default function HomePage() {
    return (
        <Carousel style={{width: "100%", height: "750px"}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="First slide"
                style={{Width: "100%", height: "750px"}}/>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFpciUyMHNhbG9ufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Second slide"
                style={{Width: "100%", height: "750px"}}/>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpciUyMHNhbG9ufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Third slide"
                style={{Width: "100%", height: "750px"}}/>
            </Carousel.Item>
        </Carousel>
    )
}
