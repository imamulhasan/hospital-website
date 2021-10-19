import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/carousel3.jpg';
import banner2 from '../../../images/carousel2.jpg';
import banner3 from '../../../images/carousel4.jpg';
import banner4 from '../../../images/carousel1.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item>
                <img 
                className="d-block w-100 banner-image"
                src={banner1}
                alt="First slide"
                /> 
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 banner-image"
                src={banner2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 banner-image"
                src={banner4}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 banner-image"
                src={banner3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;