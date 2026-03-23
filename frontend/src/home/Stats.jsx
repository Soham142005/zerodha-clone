import React from 'react';

function Stats() {
    return ( 
        <section className='mt-5 mb-5'>
        <div className='container '>
            <div className='row d-flex justify-content-between '>
                <div className='col-5 p-3'>
                    <h2 className=' fs-4  mb-5'>Trust with confidence</h2>
                    <div className='mb-5 '>
                        <h3 className='fs-5'>Customer-first always</h3>
                        <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='mb-5'>
                        <h3 className='fs-5'>No spam or gimmicks</h3>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className='mb-5'>
                        <h3 className='fs-5'>The Zerodha universe</h3>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='mb-5'>
                        <h3 className='fs-5'>Do better with money</h3>
                        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-7 p-3'>
                    <img src='media/ecosystem.png' style={{width:"100%"}}></img>
                    <div className='text-center mt-3 '>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    
                </div>
                <img src='media/pressLogos.png' className='mb-5' style={{width:"65%" , margin:"0 auto"}}></img>
            </div>
           
        </div>
        </section>
     );
}

export default Stats;