import React from 'react';

function Team() {
    return ( 
        <section className='py-5'>
        <div className='container pt-5  ceo'>
            <h4 className='text-center mb-4'>People</h4>
            <div className='row ceo-container justify-content-between'>
                <div className='col-5 text-center'>
                    <img src="media/nithinKamath.jpg" alt="nitin kamath" />
                    <h5 className='mt-3'>Nithin Kamath</h5>
                    <p>Founder, CEO</p>
                </div>
                <div className='col-7 '>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
        <div className='container teams'>
            <div className='row'>
                <div className='col text-center'>
                    <img src="media/Nikhil.jpg" alt="nitin kamath" />
                    <h5 className='mt-3'>Nikhil Kamath</h5>
                    <p>Co-founder & CFO</p>
                </div>
                <div className='col text-center'>
                    <img src="media/Kailash.jpg" alt="nitin kamath" />
                    <h5 className='mt-3'>Dr. Kailash Nadh</h5>
                    <p>CTO</p>
                </div>
                <div className='col text-center'>
                    <img src="media/Venu.jpg" alt="nitin kamath" />
                    <h5 className='mt-3'>Venu Madhav</h5>
                    <p>CCO</p>
                </div>
            </div>
             <div className='row'>
                <div className='col text-center'>
                    <img src="media/Hanan.jpg" alt="nitin kamath" />
                    <h5 className='mt-3'>Hanan Delvi</h5>
                    <p>CCO</p>
                </div>
                <div className='col text-center'>
                    <img src="media/Seema.jpg" alt="nitin kamath" />
                    <h5 className='mt-3'>Seema Patili</h5>
                    <p>Director</p>
                </div>
                <div className='col text-center'>
                    <img src="media/karthik.jpg" alt="nitin kamath" />
                    <h5 className='mt-3'>Karthik Rangappa</h5>
                    <p>Chief of Education</p>
                </div>
            </div>
             <div className='row'>
                <div className='col text-center'>
                    <img src="media/Austin.jpg" alt="nitin kamath" />
                    <h5 className='mt-3'>Austin Prakesh</h5>
                    <p>Director Strategy</p>
                </div>
                <div className='col text-center'></div>
                <div className='col text-center'></div>
            </div>
            
        </div>
        </section>
     );
}

export default Team;
