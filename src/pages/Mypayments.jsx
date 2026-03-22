import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Mypayments.css";

export default function MyPayments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace '1' with actual touristId logic as needed
    // const touristId = 1;
    const touristId = localStorage.getItem("userId");

    axios
      .get(`http://13.218.211.254:8087/api/v1/booking/user-payments/${touristId}`)
      .then((response) => {
        setPayments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching payments:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="payments-container">
        <p>Loading history...</p>
      </div>
    );

  return (
    <div className="payments-container">
      <h2>My Payments</h2>
      <p className="subtitle">Your payment history with TripGenix</p>

      <div className="payments-table-wrapper">
        <table className="payments-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Method</th>
              <th>Amount (LKR)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <td data-label="Transaction ID">{payment.transactionId}</td>
                <td data-label="Date">
                  {new Date(payment.date).toLocaleDateString()}
                </td>
                <td data-label="Description">{payment.description}</td>
                <td data-label="Method">{payment.method}</td>
                <td data-label="Amount (LKR)">
                  {payment.amount.toLocaleString()}
                </td>
                <td data-label="Status">
                  <span
                    className={`status ${
                      payment.status?.toLowerCase() === "paid"
                        ? "paid"
                        : "pending"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
