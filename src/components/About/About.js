import React from 'react';
import './About.css'
import incuiryBanner from '../../images/incuiry/incuiry.jpg';
import { Card, CardGroup } from 'react-bootstrap';
import quality1 from '../../images/incuiry/quality1.jpg';
import specialists from '../../images/incuiry/Bumrungrad_specialties.jpg';


const About = () => {
    return (
        <div style={{fontFamily:'sans-serif' ,backgroundColor:'#f0f0f0'}}>
            <div>
                <img width="100%" src={incuiryBanner} alt="" />
            </div>
            <div className="container care-info my-5">
                <h2>World-class Care</h2>
                <p>Founded in 1980, Bumrungrad International Hospital has been a global pioneer in providing world-class healthcare services and international patient support for nearly four decades. Located in the heart of Bangkok, Thailand, a cosmopolitan megacity nicknamed “The City of Angels” and renowned for its culture of exceptional hospitality and delicious cuisine. Bumrungrad is an internationally accredited, multi-specialty hospital listed on the Stock Exchange of Thailand since 1989. One of the largest private hospitals in Southeast Asia, Bumrungrad International Hospital cares for over 1.1 million patients from more than 190 countries annually.</p>
            </div>

            <div>
                <div className="container quality-info">
                    <hr />
                    <h4>Quality, Safety with Measurable Results</h4>
                    <hr />
                    <p>Bumrungrad International Hospital has set up multidisciplinary teams of experienced medical doctors, nurses, pharmacists, physical therapists, nutritionists, medical technologists and other professional staff to integrate quality treatment, making it a one-stop shop healthcare destination for all types of patients and complex care needs. Bumrungrad International Hospital employs over 1,300 medical doctors and over 4,800 support professionals. A majority of the doctors have earned international board certifications from the United States, United Kingdom, Australia, Japan and other advanced economies well known for high medical and quality standards. The seamless collaboration of expertise between our medical teams allows for better treatments and outcomes for patients across more than 70 medical subspecialties.</p>
                </div>
                <CardGroup className="container">
                    <Card className="border-0">
                        <Card.Img variant="top" src={quality1} />
                    </Card>
                </CardGroup>
            </div>
            <div>
                <div className="container quality-info">
                    <hr />
                    <h4>Collaboration of Expertise</h4>
                    <hr />
                    <p>Bumrungrad International Hospital is the first hospital in Asia accredited by the US-based Joint Commission International (JCI), achieving accreditation five consecutive times since 2002. In 2017, Bumrungrad also became the first hospital in Asia to be DNV GL MIR Certified for Infection Risk, and became the first non-US hospital to earn Global Healthcare Accreditation with Excellence designation from GHA, which signifies the highest international quality and safety standards for overseas patients traveling to Bumrungrad International Hospital for treatment and care. Through our consistent clinical standards and many international accreditations, Bumrungrad has demonstrated some of the highest clinical success rates and lowest infection rates in the region and world.</p>
                </div>
                <CardGroup className="container">
                    <Card className="border-0">
                        <Card.Img variant="top" src={specialists} />
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default About;