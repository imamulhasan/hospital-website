import React from 'react';
import { Link } from 'react-router-dom';
import success from '../../images/appintment/thumbsup.jpg';

const Success = () => {
    return (
        <div style={{backgroundColor:'#f0f0f0'}} className="text-center py-5"  >
            <div>
            <h2>Your Appintment is success!</h2>
            <Link to="/">
            <button className="btn btn-success">Go to Home</button>
            </Link>
            </div>
            <img height="50%" width="50%" className="my-5"  src={success} alt="" />
           
        </div>
    );
};

export default Success;