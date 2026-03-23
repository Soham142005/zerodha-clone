import React from 'react';

function Brokerage() {
    return ( 
        <section className='Brokerage container '  >
            <div className='row  justify-content-evenly mt-5 pt-5 text-center'>
                <div className='col'>
                    <img src="media\pricingEquity.svg" alt="prcing" />
                    <h3 className='mb-4'>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col'>
                    <img src="media\intradayTrades.svg" alt="pricing" />
                    <h3 className='mb-4'>Intraday and F&O trades</h3>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col'>
                    <img src="media\pricingMF.svg" alt="pricing" />
                    <h3 className='mb-4'>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </section>
     );
}

export default Brokerage;