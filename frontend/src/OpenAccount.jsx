import { Link } from "react-router-dom";
function OpenAccount() {
    return ( 
        <section className='  p-5 mt-5 mb-5'>
        <div className='container '>
            <div className='row text-center'>
                <h1 className='fs-4'>Open a Zerodha account</h1>
                <p className='fs-6'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup"><button className=' p-1.5 btn btn-primary fs-5 mt-4' style={{width:"20%", margin:"0 auto"}} >Sign Up for free</button>
                 </Link>
            </div>
        </div>
        </section>
     );
}

export default OpenAccount;