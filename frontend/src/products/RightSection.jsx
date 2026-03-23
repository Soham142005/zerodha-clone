import { Link } from "react-router-dom";

function RightSection({imageUrl ,productName, productDescription, learnMore}) {
    return ( 
        <section className="pt-5 mt-5">
                    <div className='container product-left'>
                        <div className='row justify-content-between align-items-center'>
                        
                            <div className='col-4 ' style={{lineHeight:"1.8"}}>
                                <h3 className="mb-4">{productName}</h3>
                                <p>{productDescription}</p>
                                <div className=" mb-4">                                      
                                    <Link className="text-decoration-none" to={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></Link> 
                                    
                                </div>
                                
                            </div>
                             <div className='col-7 text-center ps-4'>
                                <img src={imageUrl} alt="" />
                            </div>    
                        </div>
                    </div>
                </section>
     );
}

export default RightSection;