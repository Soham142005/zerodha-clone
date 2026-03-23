import React from 'react';

function Awards() {
    return ( 
        <section className='mt-5'>
        <div className='container '>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Stock broker in India</h1>
                    <p className='mb-5'>2+ million zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className='row  '>
                        <div className='col-6'>
                            <ul >
                                <li className='p-2'>Futures and Options</li>
                                <li className='p-2'>Commodity derivatives</li>
                                <li className='p-2'> currency derivatives</li>

                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='p-2'>Stocks & IPOs</li>
                                <li className='p-2'>Direct mutual funds</li>
                                <li className='p-2'>Bonds and Govt. Securities</li>

                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
        </section>
     );
}
export default Awards;