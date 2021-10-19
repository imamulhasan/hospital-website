// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const {id}=useParams()
    const [details,setDetails]=useState([])
    
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
        const singleDetail= details.filter(data=>data.id===id)
    return (
        <div style={{backgroundColor:'#f0f0f0'}} className="">
            <Row className='container mx-auto' xs={1} md={1}>
            <Col>
            <Card className="border-0">
                <img className="mx-auto" width="100%" src={singleDetail[0]?.img} alt="" />
                <Card.Body className="text-center">
                <Card.Title className="detail-title">
                    <h3>{singleDetail[0]?.name}</h3>
                </Card.Title>
                <hr className="w-25 mx-auto text-success" />
                <Card.Text className="detail-text">
                    {singleDetail[0]?.description}
                </Card.Text>
               <div className="d-flex justify-content-between">
                   <h3 className="text-secondary">$ {singleDetail[0]?.price}</h3>
                   <Link to="/success" className="text-decoration-none px-4 py-2 appointment-btn">
                     Appointment
                   </Link>
               </div>
                
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </div>
    );
};

export default ServiceDetail;