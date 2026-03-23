import React from 'react';

function Hero() {
    return ( 
        <section>
            
                <div className='  text-center' style={{paddingTop : "100px", paddingBottom : "100px" , borderBottom: "1px solid #eee "}}>
                <h2 className='fs-3' >We pioneered the discount broking model in India.
                <br/> Now, we are breaking ground with our technology.</h2>
                </div>
            <div className='container'>
                <div className='row mt-5 pt-5 px-4 d-flex justify-content-center lh-lg' >
                    <div className='col-5 '>
                        <p className=''>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                        <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                        <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </div>
                    <div className='col-5'>
                        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                        <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                        <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                    </div>
                </div>
            </div>
            
            
        </section>
     );
}
 
export default Hero;