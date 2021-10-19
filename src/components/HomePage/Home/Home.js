import React from 'react';
import Argent from '../Argent/Argent';
import Banner from '../Banner/Banner';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div style={{backgroundColor:'#f0f0f0'}}>
          <Banner></Banner>
          <Argent></Argent>
          <Treatments></Treatments>
        </div>
    );
};

export default Home;