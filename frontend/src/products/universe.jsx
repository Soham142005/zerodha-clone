import { Link } from "react-router-dom";
function universe() {
    return ( 
        <>
        <section className="pt-5 mt-5">
        <h5 className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
        <div className="container universe mt-5 pt-5">

            <div className="row text-center">
                <h4>The Zerodha Universe</h4>
                <p className="pt-3">Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row partners align-items-center justify-content-evenly pt-5">
                <div className="col-3 p-0">
                    <img src="media\zerodhaFundhouse.png" alt="" />
                    <p>Our asset management venture <br /> that is creating simple and transparent index <br />funds to help you save for your goals.</p>
                    <br /><br/>

                    <img src="media\streakLogo.png" alt="" />
                    <p>Systematic trading platform <br /> that allows you to create and backtest <br /> strategies without coding.</p>

                </div>
                <div className="col-3 p-0">
                    <img src="media\sensibullLogo.svg" alt="" />
                    <p>Options trading platform that lets you <br />create strategies, analyze positions, and <br />examine data points like open interest, FII/DII, and more.</p>
                    <br /><br/>
                     <img src="media\smallcaseLogo.png" alt="" />
                    <p>Thematic investing platform <br />that helps you invest in diversified <br /> baskets of stocks on ETFs.</p>
                </div>
                <div className="col-3 p-0 ">
                    <img src="media\tijori.png" alt="" />
                    <p>Investment research platform <br /> that offers detailed insights on stocks,<br /> sectors, supply chains, and more.</p>
                    <br /><br/>
                    <img src="media\dittoLogo.png" alt=""  style={{width:"60%", margin:"0 auto", paddingLe:"20px"}}/>
                    <p>Personalized advice on life <br />and health insurance. No spam <br />and no mis-selling.</p>
                </div>
            </div>
            <div >
                 <Link to="/signup"className="row p-5 mb-5">
                <button className="btn btn-primary p-1.5 fs-5" style={{width:"22%", margin:"0 auto"}}>
                    Sign up for free
                </button>
                </Link>
            </div>
        </div>
        </section>
        </>
     );
}

export default universe;