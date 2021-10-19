import React, { useEffect, useState } from 'react';
import './Doctors.css'
import docBanner from '../../images/doctors/doc-banner.jpg';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';


const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res=> res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div style={{backgroundColor:'#f0f0f0'}}>
            <div >
                <img width="100%" src={docBanner} alt="" />
            </div>
            <div className="container py-5">
            <Row xs={1} md={3} className="g-4">
                {
                  doctors.map(doctor=><Doctor
                  key={doctor.id}
                  doctor={doctor}
                  ></Doctor>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Doctors;