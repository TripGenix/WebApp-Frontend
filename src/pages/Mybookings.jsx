import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyBookings.css";

export default function Mybookings() {
  // 1. Initialize as empty array to receive data from backend
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch data from Spring Boot Backend
  useEffect(() => {
    const touristId =localStorage.getItem("userId"); // Replace with actual logged-in user ID logic
    axios.get(`http://localhost:8087/api/v1/booking/user-dashboard/${touristId}`)
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="bookings-container"><p>Loading...</p></div>;

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
              <tr key={booking.bookingId}>
                {/* Updated fields to match BookingResponseDto.java */}
                <td data-label="Reference ID">{booking.referenceId}</td>
                <td data-label="Tour Package">
                    {/* Joining the route array to show "Start to End" */}
                    {booking.route && booking.route.join(" to ")}
                </td>
                <td data-label="Booking Date">
                    {new Date(booking.createdAt).toLocaleDateString()}
                </td>

                <td data-label="Payment Status">
                  <span
                    className={`status ${
                      booking.paymentStatus?.toLowerCase() === "paid"
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
                      booking.driverStatus?.toLowerCase() === "confirmed" || booking.driverStatus?.toLowerCase() === "assigned"
                        ? "assigned"
                        : booking.driverStatus?.toLowerCase() === "on the way"
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