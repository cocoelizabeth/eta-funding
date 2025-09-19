import React, { useRef, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { ComparisonTableStyles } from "../../styles/investmentStrategy/ComparisonTableStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";

function ComparisonTable() {
  const data = useStaticQuery(graphql`
    {
      allSanityManagedFund {
        nodes {
          hero {
            _rawHeadlineTextCustom
            _rawSubText
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityManagedFund.nodes[0];

  return (
    <ComparisonTableStyles>
      <section>
        {/* <h3>ETA FUNDING VS. PRIVATE EQUITY VS. COMPETITOR ACQUISITION</h3> */}
        <table>
          <thead>
            <tr>
              <th></th>
              <th> ETA FUNDING</th>
              <th>PRIVATE EQUITY</th>
              <th>COMPETITOR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> SELLER’S PROFIT</th>
              <td>
                {" "}
                You’ll see your money upfront with a major liquidity event upon
                close
              </td>
              <td>
                {" "}
                It could take a long time for you to take money off the table.
                Often tied to earnout and performance metrics, or the long-term,
                ongoing success of the business
              </td>
              <td>
                {" "}
                It could take a long time for you to take money off the table.
                Often tied to earnout and performance metrics as well as
                Seller’s continued role working as a manager for the buyer
              </td>
            </tr>
            <tr>
              <th> TIME TO CLOSE</th>
              <td>
                Fastest option possible with the potential to get from initial
                introduction to a completed transaction in under 3 months.
                You’ll be interacting directly with our only decision maker, so
                the process is quick and pain free
              </td>
              <td>
                6-12 month negotiation process involving several counterparties
                and approval required from investment committees
              </td>
              <td>
                9-12+ month negotiation process requiring several layers of
                approval and a protracted integration period
              </td>
            </tr>
            <tr>
              <th> EASE OF TRANSACTION</th>
              <td>
                The deal structure is completely flexible to Seller’s needs and
                circumstances. We are able to easily adapt in order to create
                the most mutual benefit
              </td>
              <td>
                The deal structure is driven by required return thresholds for
                investors and other strict requirements
              </td>
              <td>
                The deal is structured to protect the acquiring company from
                risk, which means a potentially disadvantageous situation for
                Seller
              </td>
            </tr>
            <tr>
              <th> SELLER’S ROLE POST-CLOSING</th>
              <td>Extremely flexible to Seller’s preference</td>
              <td>
                Full-time ongoing operating responsibility with strict investor
                oversite
              </td>
              <td>
                Required to stay on for extended time as a business unit manager
                working under a corporate structure
              </td>
            </tr>
            <tr>
              <th> BUSINESS’S FUTURE</th>
              <td>
                Remain an independent company with 100% of new owner’s focus and
                commitment
              </td>
              <td>
                One of many companies within a portfolio, often bought to be
                resold within 3-5 years after aggressive cost-cutting measures
              </td>
              <td>
                Small piece of a larger business, often with less autonomy and
                decreased ability to serve customers and employees
              </td>
            </tr>
            <tr>
              <th>EMPLOYEES’ FUTURE</th>
              <td>
                Highly focused on retention as current employees will be
                critical to the business post-transaction. There will be
                significant opportunity for growth and promotion
              </td>
              <td>
                Employment status at risk due to private equity cost cutting
                measures
              </td>
              <td>
                Employment status at risk as competitor will have their own
                employees and terminate those that are redundant
              </td>
            </tr>
            <tr>
              <th>SOURCE OF CAPITAL</th>
              <td>
                Personal wealth and committed group of high-net-worth and
                ultra-high-net-worth individuals
              </td>
              <td>
                Institutional Funds, Sovereign Wealth Funds, and Pension Funds
                that have limited time to generate specific returns
              </td>
              <td>Company performance and capital market cycle</td>
            </tr>
          </tbody>
        </table>
      </section>
    </ComparisonTableStyles>
  );
}

export default ComparisonTable;
