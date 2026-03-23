import {Link} from 'react-router-dom';

function DetailsComponent( {visitlinks , listheading , iconClass}) {
    const visitlink = visitlinks.map((visit) => 
                <li className=" ps-1 zerodha-color"> 
                  <Link className='d-flex p-2 zerodha-color text-decoration-none'>{visit}</Link>
                </li>
                );

    return ( 
       
          <details>
            <summary className="d-flex align-items-center border rounded-1 " style={{borderColor:"#eee"}}>
              <div className="d-flex px-4 bluecolor rounded-1 align-items-center align-self-stretch flex-shrink-0" >
                <span className={` ${iconClass} fs-6  lh-base  zerodha-color `}></span>
              </div>
              <h2 className=" px-3 py-3 fs-5 lh-base m-0"  >{listheading}</h2>
              <span   className="fa-solid fa-angle-down fs-6 px-5 ms-auto zerodha-color" >

              </span>
            </summary>
            <div className="d-flex flex-column  w-100 ticket-border">
              <ul className="d-flex flex-column ps-5 py-3 w-100 ">
                {visitlink}
              </ul>
            </div>
          </details>
     );
}

export default DetailsComponent;
