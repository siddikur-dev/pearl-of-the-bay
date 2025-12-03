import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          toast.success("Payment updated!");
        })
        .catch(() => toast.error("Payment update failed"));
    }
  }, [sessionId, mounted, axiosSecure]);

  return (
    <div>
      <h2 className="text-4xl">Payment successful</h2>
      {/* <p>Your TransactionId: {paymentInfo.transactionId}</p>
      <p>Your Parcel Tracking id: {paymentInfo.trackingId}</p> */}
    </div>
  );
};

export default PaymentSuccess;
