import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function FinalPaymentPage() {
  const { id } = useParams();

  const tourId = id; // Assuming the URL is like /final-payment/:id
  const [booking, setBooking] = useState(null);
  const [hash, setHash] = useState("");
  const [loading, setLoading] = useState(true);

  const orderIdRef = useRef(null);

  /* =========================
     FETCH BOOKING
  ========================= */
  useEffect(() => {
    fetchBooking();
  }, []);

  console.log("Tour ID from URL:", id); // Debug log
  async function fetchBooking() {
    try {
      const res = await fetch(
        `http://localhost:8087/bookingservice/api/v1/get_booking_by_id/${id}`
      );

      if (!res.ok) throw new Error("Booking not found");

      const data = await res.json();
      setBooking(data);
    } catch (err) {
      console.error("Failed to fetch booking", err);
    }
  }

  /* =========================
     PREPARE HASH (75%)
  ========================= */
  useEffect(() => {
    if (booking) prepareHash();
  }, [booking]);

  async function prepareHash() {
    const reference = booking.referenceId;

    const total = Number(booking.routeDetails.bookingPrice);
    const advance = total * 0.25;
    const balanceAmount = (total - advance).toFixed(2);

    const currency = "LKR";

    if (!orderIdRef.current) {
      orderIdRef.current = `${reference}-FINAL-${Date.now()}`;
    }

    const response = await fetch(
      `http://localhost:8087/paymentcontroller/getHash` +
        `?orderId=${orderIdRef.current}` +
        `&amount=${balanceAmount}` +
        `&currency=${currency}`
    );

    const hashValue = await response.text();
    setHash(hashValue);
    setLoading(false);
  }

  /* =========================
     SUBMIT FINAL PAYMENT
  ========================= */
  function submitPayment() {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://sandbox.payhere.lk/pay/checkout";

    const total = Number(booking.routeDetails.bookingPrice);
    const advance = total * 0.25;
    const balanceAmount = (total - advance).toFixed(2);

    const currency = "LKR";

    const fields = {
      merchant_id: "1233436",

      return_url:
        `${import.meta.env.VITE_WEB_APP_URL}/payment-success` +
        `?tourId=${tourId}` +
        `&reference=${booking.referenceId}` +
        `&amount=${balanceAmount}`,

      cancel_url:
        `${import.meta.env.VITE_WEB_APP_URL}/payment-cancel?tourId=${tourId}`,

      notify_url: `${import.meta.env.VITE_PAYMENTSERVICE_API_URL}/notify`,

      order_id: orderIdRef.current,
      items: "TripGenix Final Payment",
      currency,
      amount: balanceAmount,

      first_name: booking.bookingDetails.nameOfBooker,
      last_name: booking.bookingDetails.nameOfBooker,
      email: booking.bookingDetails.bookerEmail,
      phone: booking.bookingDetails.bookerPhone,
      address: booking.tripDetails.startLocation,
      city: "Sri Lanka",
      country: "Sri Lanka",

      hash,
    };

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  }

  /* =========================
     LOADING
  ========================= */
  if (loading || !booking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Preparing final payment…
      </div>
    );
  }

  /* =========================
     CALCULATIONS
  ========================= */
  const total = Number(booking.routeDetails.bookingPrice);
  const advance = (total * 0.25).toFixed(2);
  const balance = (total * 0.75).toFixed(2);

  /* =========================
     UI
  ========================= */
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      
      {/* LEFT */}
      <div className="lg:w-1/2 w-full bg-green-100 p-8 lg:p-12">
        <h1 className="text-3xl font-bold mb-6">Final Payment Notice</h1>

        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>You have already paid <b>25% advance</b>.</li>
          <li>Now you must complete the <b>remaining 75%</b>.</li>
          <li>This will fully confirm your tour.</li>
          <li>Payments are securely processed via PayHere.</li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-2 bg-green-600"></div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Complete Payment
            </h2>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Booking Reference</span>
                <span className="font-medium">{booking.referenceId}</span>
              </div>

              <div className="flex justify-between">
                <span>Total Cost</span>
                <span>LKR {total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-green-700">
                <span>Advance Paid</span>
                <span>LKR {advance}</span>
              </div>

              <div className="flex justify-between font-bold text-red-600">
                <span>Remaining Balance</span>
                <span>LKR {balance}</span>
              </div>
            </div>

            <hr className="my-6" />

            <button
              onClick={submitPayment}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-semibold"
            >
              💳 Pay Remaining 75%
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              🔒 Secure payment powered by PayHere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}