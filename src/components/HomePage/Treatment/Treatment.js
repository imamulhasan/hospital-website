import React from 'react';
import './Treatment.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Treatment = ({treatment}) => {
    const {id,name,img,description}=treatment;
    return (
        <Col>
        <Card className="border-0">
            <Card.Img variant="top" src={img}/>
            <Card.Body>
            <Card.Title className="card-name">{name}</Card.Title>
            <hr className="w-25" />
            <Card.Text>
                {description}
            </Card.Text>
            <Link className="text-decoration-none see-detail" to={`/detail/${id}`}>
            see details <i className="fas fa-angle-right"></i>
            </Link>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Treatment;