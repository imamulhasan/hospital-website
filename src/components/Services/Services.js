import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import serviceBanner from '../../images/service/service-banner.jpg';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div style={{backgroundColor:'#f0f0f0'}}>
            <div>
                <img width="100%" src={serviceBanner} alt="" />
            </div>
            <div className="container py-5">
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service=> <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </Row>
            </div>
            
        </div>
    );
};

export default Services;