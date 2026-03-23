import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Charges from './Charges';
import ChargeExplain from './ChargeExplain';

function PricingPage() {
    return ( 
        <>
        <Hero />
        <Brokerage />
        <div className=''>
            <h4>  </h4>
        </div>
        <Charges />
        <ChargeExplain/>
        </>
     );
}

export default PricingPage;