import React from 'react';
import Argent from '../Argent/Argent';
import Banner from '../Banner/Banner';
import Certificate from '../Certificate/Certificate';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div style={{backgroundColor:'#f0f0f0'}}>
          <Banner></Banner>
          <Argent></Argent>
          <Treatments></Treatments>
          <Certificate></Certificate>
        </div>
    );
};

export default Home;