import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const {name,img,specialist}=doctor
    return (
        <Col>
            <Card className="border-0 shadow-sm">
                <img className="rounded-circle mx-auto mt-4" height="150px" width="150px" src={img} alt="" />
                <Card.Body className="text-center">
                <Card.Title>{name}</Card.Title>
                <hr />
                <p className="text-success"><small>Specialist</small></p>
                <Card.Text>
                   {specialist}
                </Card.Text>
                <Link to="/success" className="text-decoration-none mx-auto px-4 py-2 appointment-btn">
                     Appointment
                   </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;