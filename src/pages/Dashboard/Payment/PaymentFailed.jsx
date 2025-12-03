import React from "react";
import { Link } from "react-router";

const PaymentFailed = () => {
  return (
    <div>
      Payment Failed
      <Link to="/dashboard/my-parcels" className="btn btn-secondary text-black">
        Go Back
      </Link>
    </div>
  );
};

export default PaymentFailed;