import React, { useState } from "react";
import "./MyPayments.css";

export default function MyPayments() {
  const [payments] = useState([
    {
      id: "TXN001",
      date: "2025-01-05",
      description: "Ella Day Tour",
      amount: 25000,
      method: "Card",
      status: "Paid",
    },
    {
      id: "TXN002",
      date: "2025-01-12",
      description: "Yala Safari Package",
      amount: 42000,
      method: "Card",
      status: "Paid",
    },
    {
      id: "TXN003",
      date: "2025-01-20",
      description: "Airport Pickup",
      amount: 8000,
      method: "Cash",
      status: "Pending",
    },
  ]);

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
  {payments.map((payment) => (
    <tr key={payment.id}>
      <td data-label="Transaction ID">{payment.id}</td>
      <td data-label="Date">{payment.date}</td>
      <td data-label="Description">{payment.description}</td>
      <td data-label="Method">{payment.method}</td>
      <td data-label="Amount (LKR)">
        {payment.amount.toLocaleString()}
      </td>
      <td data-label="Status">
        <span
          className={`status ${
            payment.status === "Paid" ? "paid" : "pending"
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
