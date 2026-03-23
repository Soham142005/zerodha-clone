import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <section className='p-5'style={{marginTop :"2rem"}}>
        <div className='container' >
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='Hero image' className='mb-5' style={{width:"65%" ,margin:"0 auto"}}/>
                <h1 className='fs-2'>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/signup" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                    <button 
                        className='p-1.5 btn btn-primary fs-5 mt-4' 
                        style={{ width: "20%", margin: "0 auto" }}
                    >
                        Sign Up for free
                    </button>
                </Link>    
            </div>
        </div>
        </section>
     );
}

export default Hero;