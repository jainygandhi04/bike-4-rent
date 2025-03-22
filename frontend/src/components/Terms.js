import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const TermsAndConditions = () => {
  return (
    <section className="max-w-4xl px-4 py-10 mx-auto text-slate-900">
      <h1 className="mb-6 text-3xl font-bold text-center">Terms & Conditions</h1>

      <Collapse accordion>
        <Panel header="1. Rental Agreement" key="1">
          <p>
            By renting a vehicle from Bike-4-Rent, you agree to comply with all terms mentioned herein and 
            to return the vehicle in the same condition as received.
          </p>
        </Panel>

        <Panel header="2. Valid Documents" key="2">
          <p>
            Riders must possess a valid driving license and government-issued ID proof. Copies of these documents 
            will be submitted during booking or at pickup.
          </p>
        </Panel>

        <Panel header="3. Payment & Deposit" key="3">
          <p>
            Full payment and a refundable security deposit are to be paid prior to the handover of the vehicle. 
            The deposit will be refunded post-inspection.
          </p>
        </Panel>

        <Panel header="4. Usage Policy" key="4">
          <p>
            The vehicle is to be used within the agreed location limits. Misuse, illegal activities, and sub-rental 
            are strictly prohibited.
          </p>
        </Panel>

        <Panel header="5. Damage & Penalties" key="5">
          <p>
            Any damage to the vehicle during the rental period will be assessed and repair costs will be deducted 
            from the deposit or charged additionally.
          </p>
        </Panel>

        <Panel header="6. Late Return Charges" key="6">
          <p>
            Returns made later than the agreed time will attract late fees as per company policy. Ensure 
            timely returns to avoid penalties.
          </p>
        </Panel>

        <Panel header="7. Cancellation & Refunds" key="7">
          <p>
            Bookings canceled 24 hours prior will receive a full refund. No refunds will be provided for same-day 
            cancellations.
          </p>
        </Panel>

        <Panel header="8. Agreement Modifications" key="8">
          <p>
            Bike-4-Rent reserves the right to modify the terms & conditions at any point without prior notice.
          </p>
        </Panel>
      </Collapse>
    </section>
  );
};

export default TermsAndConditions;
