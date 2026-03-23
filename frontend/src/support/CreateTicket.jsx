import DetailsComponent from "./DetailsComponent";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <section className="d-flex   pt-4 px-4 m-auto mx-5 flex-row column-gap-5">
      <div className="d-flex flex-column pt-4 pb-5 w-100  gap-4">
        <DetailsComponent
          visitlinks={[
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary",
          ]}
          listheading="Account opening"
          iconClass="fa-regular fa-circle-user"
        />

        <DetailsComponent
          visitlinks={[
            "Your Profile",
            "Account modification",
            "Client Master Report (CMR) and Depository Participant (DP)",
            "Nomination",
            "Transfer and conversion of securities",
          ]}
          listheading="Your Zerodha Account"
          iconClass="fa-regular fa-circle-user"
        />

        <DetailsComponent
          visitlinks={[
            "IPO",
            "Trading FAQs",
            "Margin Trading Facility (MTF) and Margins",
            "Charts and orders",
            "Alerts and Nudges",
            "General",
          ]}
          listheading="Kite"
          iconClass="fa-solid fa-caret-up"
        />

        <DetailsComponent
          visitlinks={[
            "Add money",
            "Withdraw money",
            "Add bank accounts",
            "eMandates",
          ]}
          listheading="Funds"
          iconClass="fa-solid fa-indian-rupee-sign"
        />

        <DetailsComponent
          visitlinks={[
            "Portfolio",
            "Corporate actions",
            "Funds statement",
            "Reports",
            "Profile",
            "Segments",
          ]}
          listheading="Console"
          iconClass="fa-solid fa-circle-radiation"
        />

        <DetailsComponent
          visitlinks={[
            "Mutual funds",
            "National Pension Scheme (NPS)",
            "Fixed Deposit (FD)",
            "Features on Coin",
            "Payments and Orders",
            "General",
          ]}
          listheading="Coin"
          iconClass="fa-regular fa-circle-dot"
        />
      </div>

      <div className="flex-shrink-0 " style={{ width: "28%" }}>
        <div className="d-flex flex-column py-3 px-4 mt-4 w-100 bgartyellow gap-1">
          <ul>
            <li>
              <Link className="zerodha-color">
                Surveillance measure on scrips - September 2025
              </Link>
            </li>
            <li>
              <Link className="zerodha-color">
                Rights Entitlements listing in September 2025
              </Link>
            </li>
          </ul>
        </div>
        <div className=" d-flex flex-column py-3 w-100">
          <div className="py-3 px-4" style={{ backgroundColor: "#f6f6f6" }}>
            Quick links
          </div>
          <Link
            className="py-3 px-4  border border-top-0 zerodha-color text-decoration-none"
            style={{ borderColor: "#eee" }}
          >
            1. Track account opening
          </Link>

          <Link
            className="py-3 px-4  border border-top-0 zerodha-color text-decoration-none"
            style={{ borderColor: "#eee" }}
          >
            2. Track segment activation
          </Link>

          <Link
            className="py-3 px-4  border border-top-0 zerodha-color text-decoration-none"
            style={{ borderColor: "#eee" }}
          >
            3. Intraday margins
          </Link>

          <Link
            className="py-3 px-4  border border-top-0 zerodha-color text-decoration-none"
            style={{ borderColor: "#eee" }}
          >
            4. Kite user manual
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
