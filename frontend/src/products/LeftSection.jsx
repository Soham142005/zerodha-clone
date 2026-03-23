import { Link } from "react-router-dom";

function LeftSection({imageUrl ,productName, productDescription, tryDemo, learnMore, playstore, appstore}) {
    return ( 
        <section className="pt-5 mt-5">
            <div className='container product-left'>
                <div className='row justify-content-between align-items-center'>
                    <div className='col-7 text-center pe-3'>
                        <img src={imageUrl} alt="" />
                    </div>
                    <div className='col-4 ' style={{lineHeight:"1.8"}}>
                        <h3 className="mb-4">{productName}</h3>
                        <p>{productDescription}</p>
                        <div className="row mb-4">
                            <div className="col text-decoration-none">
                               <Link to={tryDemo} 
                               className=" text-decoration-none">Try demo <i class="fa-solid fa-arrow-right"></i></Link> 
                            </div>
                            <div className="col text-decoration-none">
                               <Link to={learnMore}
                               className=" text-decoration-none">Learn more <i class="fa-solid fa-arrow-right"></i></Link> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                               <Link to={playstore} >
                               <img src="media\googlePlayBadge.svg" alt="" />
                               
                               </Link> 
                            </div>
                            <div className="col">
                               <Link to={appstore} >
                               
                               <img src="media\appstoreBadge.svg" alt="" />
                               </Link> 
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            
        </section>
    );
}

export default LeftSection;  
