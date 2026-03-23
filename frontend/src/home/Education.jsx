import React from 'react';

function Education() {
    return ( 
        <section className='pt-5 mt-5 mb-5'>
            <div className='container'>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='col-5'>
                        <img src='media/education.svg' style={{maxWidth:"100%"}} ></img>
                    </div>
                    <div className='col-6 mb-5'>
                        <h2 className='mb-4 fs-3'>Free and open market education</h2>
                        <p className='mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='' style={{fontWeight: "500"  ,textDecoration: "none"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>

                        <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='' style={{fontWeight: "500"  ,textDecoration: "none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long "></i></a>
                    </div> 
                </div>
            </div>
        </section>
     );
}

export default Education;