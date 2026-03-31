import { PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from "react-router-dom";

export default function _DefPaymentPage() {
  const { state } = useLocation();


  const totalAmount = Number(state?.totalAmount ?? 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* LEFT — TERMS */}
      <div className="lg:w-1/2 w-full bg-gray-200 p-8 lg:p-12">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>Payments are processed securely.</li>
          <li>Amount shown is final and confirmed.</li>
          <li>Refunds follow company policy.</li>
          <li>By paying, you agree to our platform rules.</li>
        </ul>
      </div>

      {/* RIGHT — PAYMENT */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full h-110 max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-3 bg-blue-600"></div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Confirm Payment
            </h2>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Amount</span>
                <span className="font-semibold text-blue-600">
                  USD ${totalAmount}
                </span>
              </div>
            </div>

            <hr className="my-6" />

            <div className="mt-2">
              <PayPalButtons
                style={{ layout: "vertical", shape: "rect", height: 45 }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: totalAmount, 
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert(
                      "Payment Successful! Thank you, " +
                        details.payer.name.given_name
                    );
                  });
                }}
                onError={(err) => {
                  console.error(err);
                  alert("Payment failed. Please try again.");
                }}
              />
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              🔒 Secure payment powered by PayPal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
