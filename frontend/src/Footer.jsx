import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer"> 
    <div className="container  ">
      <div className="row  main-footer d-flex justify-content-between" > 
        <div className="col-3">
          <div className="py-3">
            <Link className="navbar-brand" to="/">
             <img
              src="media/logo.svg"
              alt="Zerodha"
              style={{ width: "60%" }}
            ></img>
            </Link>
          </div>
            <p className="mb-0 mt-1" style={{fontSize:"13px"}}>&copy; 2010 - 2025, Zerodha Broking Ltd.</p>
            <p  style={{fontSize:"0.8rem"}}>All rights reserved.</p>
        </div>

        <div className="col-9">
          <div className="row d-flex justify-content-between">
            <div className="col">
              <ul className="list-unstyled  ">
                <li className="fs-5 fw-medium mb-2">Account</li>
                <li className="">Open demat account</li>
                <li>Minor demat account</li>
                <li>NRI demat account</li>
                <li>Commodity</li>
                <li>Dematerialisation</li>
                <li>Fund transfer</li>
                <li>MTF</li>
                <li>Referral program</li>
              </ul>
              
            </div>
            <div className="col">
              <ul className="list-unstyled ">
                <li className="fs-5 fw-medium mb-2">Support</li>
                <li className="mb-2">Support portal</li>
                <li>How to file a complaint?</li>
                <li>Status of your complaints</li>
                <li>Bulletin</li>
                <li>Circular</li>
                <li>Z-Connect blog</li>
                <li>Downloads</li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-unstyled ">
                <li className="fs-5 fw-medium mb-2">Company</li>
                <li>About</li>
                <li>Philosophy</li>
                <li>Press & media</li>
                <li>Careers</li>
                <li>Zerodha Cares (CSR)</li>
                <li>Zerodha.tech</li>
                <li>Open source</li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-unstyled ">
                <li className="fs-5 fw-medium mb-2">Quick links</li>
                <li>Upcoming IPOs</li>
                <li>Brokerage charges</li>
                <li>Market holidays</li>
                <li>Economic calendar</li>
                <li>Calculators</li>
                <li>Markets</li>
                <li>Sectors</li>
              </ul>

            </div>
            
          </div>
        </div>
      </div>
      <div className="row mt-5 div2">
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#"> complaints@zerodha.com</a>, for DP related to <a href="#">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p>Procedure to file a complaint on <a href="#">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p><a href="#"> Smart Online Dispute Resolution</a> | <a href="#">Grievances Redressal Mechanism</a></p>
        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <p>India's largest broker based on networth as per NSE. <a href="#">NSE broker factsheet</a></p>
        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, <a href="#">please create a ticket here</a>.</p>
      </div>
      <div className="text-center terms-div">
      <ul className=" ">
        <li>NSE</li>
        <li>BSE</li>
        <li>MCX</li>
        <li>Terms &amp; conditions</li>
        <li>Policies &amp; procedures</li>
        <li>Privacy policy </li>
        <li>Disclosure</li>
        <li>For investor's attention</li>
        <li>Investor charter</li>
      </ul>
      </div>
    </div>
     
    </footer>
  );
}

export default Footer;
