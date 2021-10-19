import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Treatment from '../Treatment/Treatment';
import './Treatments.css'
const Treatments = () => {
    const [treatments,setTreatments]=useState([])

    useEffect(()=>{
        fetch('./treatments.json')
        .then(res=>res.json())
        .then(data=>setTreatments(data))
    },[])
    return (
        <div className="py-3 container treatments-container">
            <div className='text-center treatments-banner-text my-4'>
                <h1>Our Treatments</h1>
                <hr className="mx-auto" />
            </div>
             
            <Row xs={1} md={3} className="g-4">
                {
                    treatments.map(treatment=><Treatment
                    key={treatment.id}
                    treatment={treatment}
                    ></Treatment>)
                }
            </Row>
            <div className="text-center mt-4">
                <Link to="/services">
                <button className="border-0 px-4 py-2 rounded text-light more-service-btn">See More Services..</button>
                </Link>
            </div>
        </div>
    );
};

export default Treatments;