import React from 'react';
import './Argent.css'
import { Card, CardGroup} from 'react-bootstrap';
import doctor from '../../../images/argent/doctor.png';
import plus from '../../../images/argent/consult-a-doctor.png';
import chart from '../../../images/argent/chart.png';
import { Link } from 'react-router-dom';

const Argent = () => {
    return (
        <CardGroup className="container">
            <Card className="argent-doctor">
            <div className="logo-doctor">
                 <img width="20px" src={doctor} alt="" />
                </div>
                <Card.Body className="text-center">
                <Link to="/doctors" className="text-decoration-none argent-link">
                <Card.Title>Find a Doctor</Card.Title>
                </Link>
                <Card.Text>
                   Chose by name,speciality and more
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="argent-incuiry">
                <div className="logo-plus">
                 <img width="25px" src={plus} alt="" />
                </div>
                <Card.Body className="text-center">
                <Link to="/about" className="text-decoration-none argent-link">
                <Card.Title>About Bumrungrad</Card.Title>
                </Link>
                <Card.Text>
                    Ask about out treatments and service.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="argent-appointment">
                <div className="logo-chart">
                 <img width="20px" src={chart} alt="" />
                </div>
                <Card.Body className="text-center">
                <Link to="/services" className="text-decoration-none argent-link">
                <Card.Title>Book Appointment</Card.Title>
                </Link>
                <Card.Text>
                    Schedule your visit online.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default Argent;