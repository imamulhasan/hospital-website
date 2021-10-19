import React from 'react';
import './Certificate.css'
import certificate from '../../../images/certicicate.jpg';

const Certificate = () => {
    return (
        <div className="container py-5">
            <div className="d-md-flex" >
                <div className="">
                    <img width="100%" src={certificate} alt="" />
                </div>
                <div style={{backgroundColor:'#0bb288'}} className="text-light  text-container ">
                   <div className="mt-4">
                   <h3>International Certificate of COVID-19 Vaccination (COVID-19 Vaccine Passport)</h3>
                    <p>When you have received your complete COVID-19 vaccination you will be issued a Thailand-specific certificate of COVID-19 vaccination from the place where you are vaccinated. If you would like to travel overseas, you may request a vaccine passport for the COVID-19 vaccination for foreign travel.</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;