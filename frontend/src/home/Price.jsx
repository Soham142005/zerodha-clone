import React from 'react';


function Price() {
    return ( 
        <section className='mt-5 mb-5 pb-5'>
        <div className="container " >
            <div className="row align-items-center">
                {/* <!-- Left column for text --> */}
                <div className="col-5 px-3" >
                    <h1 className=" fs-4 mb-3 text-muted" >Unbeatable pricing</h1>
                    <p className=" text-muted mb-3 fs-6" >
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    
                </div>

                {/* <!-- Right column for pricing items --> */}
                <div className="col-7" >
                    <div className="d-flex justify-content-between  gap-6 flex-nowrap">
                        {/* <!-- Pricing Item 1 --> */}
                        <div className="d-flex align-items-end " >
                            <img src="media/pricing0.svg" alt="Zero Rupee Account Opening" className=" object-fit-contain" style={{ width: '120px', height: '120px' }}/>
                            <p className="  lh-sm text-muted mb-4 " style={{fontSize: "10px"}}>Free account <br/> Opening</p>
                        </div>

                        {/* <!-- Pricing Item 2 --> */}
                        <div className="d-flex align-items-end " >
                            <img src="media/pricing0.svg" alt="Zero Rupee Equity Delivery" className="object-fit-contain" style={{ width: '120px', height: '120px' }}/>
                            <p class=" lh-sm text-muted mb-4" style={{fontSize: "10px"}}>Free equity delivery <br/> and direct mutual funds</p>
                        </div>

                        {/* <!-- Pricing Item 3 --> */}
                        <div className="d-flex align-items-end " >
                            <img src="media/intradayTrades.svg" alt="Twenty Rupee Intraday and F&O" className="object-fit-contain" style={{ width: '120px', height: '120px' }}/>
                            <p className=" lh-sm text-muted mb-4" style={{fontSize: "10px"}}>Intraday and <br/> F&O</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="" style={{fontWeight: "500"  ,textDecoration: "none"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        </section>
     );
}

export default Price;