import React, { useState } from "react";
import "./MyBookings.css";

export default function Mybookings() {
  const [bookings] = useState([
    {
      ref: "BK001",
      packageName: "Ella Day Tour",
      date: "2025-01-05",
      paymentStatus: "Paid",
      driverStatus: "Assigned",
    },
    {
      ref: "BK002",
      packageName: "Yala Safari Package",
      date: "2025-01-12",
      paymentStatus: "Paid",
      driverStatus: "On the Way",
    },
    {
      ref: "BK003",
      packageName: "Airport Pickup",
      date: "2025-01-20",
      paymentStatus: "Pending",
      driverStatus: "Not Assigned",
    },
  ]);

  return (
    <div className="bookings-container">
      <h2>My Bookings</h2>
      <p className="subtitle">Your tour bookings with TripGenix</p>

      <div className="bookings-table-wrapper">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Reference ID</th>
              <th>Tour Package</th>
              <th>Booking Date</th>
              <th>Payment Status</th>
              <th>Driver Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.ref}>
                <td data-label="Reference ID">{booking.ref}</td>
                <td data-label="Tour Package">{booking.packageName}</td>
                <td data-label="Booking Date">{booking.date}</td>

                <td data-label="Payment Status">
                  <span
                    className={`status ${
                      booking.paymentStatus === "Paid"
                        ? "paid"
                        : "pending"
                    }`}
                  >
                    {booking.paymentStatus}
                  </span>
                </td>

                <td data-label="Driver Status">
                  <span
                    className={`driver-status ${
                      booking.driverStatus === "Assigned"
                        ? "assigned"
                        : booking.driverStatus === "On the Way"
                        ? "ontheway"
                        : "notassigned"
                    }`}
                  >
                    {booking.driverStatus}
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

