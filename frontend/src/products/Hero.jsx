
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <section>
            
            <div className='  text-center' style={{paddingTop : "100px", paddingBottom : "100px" , borderBottom: "1px solid #eee "}}>
                <h1 className='fs-3 mb-3' >Zerodha Products</h1>
                <h5 className='mb-3'>Sleek, modern, and intuitive trading platforms</h5>
                <p >Check out our <Link to="#"style={{textDecoration:"none" , fontWeight:"500"}} >investment offerings <i class="fa-solid fa-arrow-right-long"></i></Link> </p>
            </div>
        </section>        
    );
}

export default Hero;