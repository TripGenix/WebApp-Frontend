import React, { useEffect, useRef } from "react";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SuccessPayment() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const hasProcessedRef = useRef(false);

  // values passed from payment redirect
  const tourId = params.get("tourId");
  const referenceId = params.get("reference");
  const amount = Number(params.get("amount") || 0);
  const currency = params.get("currency") || "LKR";

  /* =========================
     AUTO CONFIRM + SAVE PAYMENT
  ========================= */
  useEffect(() => {
    if (!tourId || hasProcessedRef.current) return;

    hasProcessedRef.current = true;

    async function processPayment() {
      try {
        /* 1️⃣ Save payment */
        const paymentRes = await fetch(
          `${import.meta.env.VITE_PAYMENTSERVICE_API_URL}/pay`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              bookingId: Number(tourId),
              paymentType: "CARD",
              paidAmount: amount,
            }),
          }
        );

        if (!paymentRes.ok) {
          throw new Error("Payment saving failed");
        }

        console.log("💰 Payment recorded");

        /* 2️⃣ Confirm tour */
        const confirmRes = await fetch(
          `${import.meta.env.VITE_BOOKING_SERVICE_API_URL}/confirmTourByTourist/${tourId}`,
          {
            method: "POST",
          }
        );

        if (!confirmRes.ok) {
          throw new Error("Tour confirmation failed");
        }

        console.log("✅ Tour confirmed successfully");
      } catch (err) {
        console.error("❌ Payment confirmation flow failed", err);
      }
    }

    processPayment();
  }, [tourId, amount]);

  /* =========================
     INVOICE
  ========================= */
  const handleDownloadInvoice = () => {
    if (!tourId) return;

    window.open(
      `${import.meta.env.VITE_PAYMENTSERVICE_API_URL}/invoice/${tourId}`,
      "_blank"
    );
  };

  /* =========================
     UI
  ========================= */
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-10 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle size={88} className="text-green-500" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Payment Successful 🎉
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8">
          Your payment has been received and your tour is now confirmed.
        </p>

        {/* Summary */}
        <div className="bg-gray-50 rounded-xl p-6 text-left mb-8">
          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Booking Reference</span>
            <span className="font-semibold text-gray-800">
              {referenceId || "—"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Advance Paid</span>
            <span className="font-semibold text-green-600">
              {currency} {amount.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleDownloadInvoice}
            disabled={!tourId}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white py-3 rounded-lg font-medium"
          >
            <Download size={18} />
            Download Invoice
          </button>

          <button
            onClick={() => navigate("/trips")}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
          >
            View My Trips
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-500">
          A confirmation email and invoice have been sent to your email.
        </p>
      </div>
    </div>
  );
}

export default SuccessPayment;
