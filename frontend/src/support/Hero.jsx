import {Link} from 'react-router-dom';


function Hero() {
    return ( 
        <section className='support-section  px-5 '>
            <div className='px-4 py-5 m-auto ' >
                <div className='d-flex justify-content-between pb-4'>
                    <h2 className='pb-1'> Support Portal </h2>
                    <Link className='mytickets '><span>My tickets</span></Link>
                </div>
                <div className='searchbox d-flex'>
                    <span className='border border-0 pt-3'><i className="fa-solid fa-magnifying-glass "></i></span>
                    <input type="text" className='border border-0 outline-none py-3' placeholder='Eg: How do i open my account, How do i activate my F&amp;O'  style={{width:"100%" , paddingLeft:"15px" }} />
                </div>
            </div>
        </section>
     );
}

export default Hero;