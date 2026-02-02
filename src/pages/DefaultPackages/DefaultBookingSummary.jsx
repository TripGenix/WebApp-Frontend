import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg.webp";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

import Check from "@mui/icons-material/Check";
import Person from "@mui/icons-material/Person";
import Receipt from "@mui/icons-material/Receipt";
import Payment from "@mui/icons-material/Payment";

const steps = ["Booking Details", "Summary"];

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 22 },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundImage:
      "linear-gradient(95deg, #2196f3 0%, #21cbf3 50%, #1de9b6 100%)",
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundImage:
      "linear-gradient(95deg, #2196f3 0%, #21cbf3 50%, #1de9b6 100%)",
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(136deg, #2196f3 0%, #21cbf3 50%, #1de9b6 100%)",
    boxShadow: "0 4px 10px rgba(0,0,0,.3)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(136deg, #2196f3 0%, #21cbf3 50%, #1de9b6 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className, icon } = props;

  const icons = {
    1: <Person />,
    2: <Receipt />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? <Check /> : icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

function BookingFlowStepper({ activeStep, completed }) {
  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label, i) => (
          <Step key={label} completed={!!completed?.[i]}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}


export default function DefaultBookingSummary() {
  const nav = useNavigate();
  const location = useLocation();

  const [data, setData] = useState(null);

  useEffect(() => {

    setData(null);

    const fromState = location.state;

    if (fromState?.pkg && fromState?.booking) {
      setData(fromState);

      localStorage.setItem("defaultBookingDraft", JSON.stringify(fromState));
      return;
    }

    const saved = localStorage.getItem("defaultBookingDraft");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, [location.state]);

  const totalCost = useMemo(() => {
    if (!data) return 0;
    return Number(data.totalCost) || 0;
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">No booking data found.</p>
      </div>
    );
  }

  const { pkg, booking, totalPassengers } = data;

  const handleConfirm = () => {
    nav("/defpayment", {
      state: {
        ...data,
        totalAmount: Number(totalCost).toFixed(2), 
      },
    });
  };

  return (
    <div
      className="min-h-screen bg-slate-900/60 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
        <div className="text-center p-10">
          <h1 className="font-bold text-gray-900 text-4xl">
            Book Your Perfect Package Tour
          </h1>
        </div>
      <BookingFlowStepper activeStep={1} completed={{ 0: true }} />

      <div className="max-w-8xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Booking Summary</h1>
            <p className="text-gray-600 mt-1">
              Please verify your details before payment.
            </p>
          </div>

          <button
            onClick={() => nav(-1)}
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <Card title="Booker Details">
              <div className="grid h-80 grid-cols-1 md:grid-cols-2 gap-4">
                <Row label="Booker Name" value={booking?.bookerName} />
                <Row label="Email" value={booking?.email} />
                <Row label="Whatsapp" value={booking?.whatsapp} />
                <Row label="Passport" value={booking?.passport} />
                <Row label="Arrival" value={booking?.arrivalDateTime || "-"} />
                <Row label="Departure" value={booking?.departureDateTime || "-"} />
                <Row label="Flight No." value={booking?.flightNumber || "-"} />
                <Row
                  label="Departure Airport"
                  value={booking?.departureAirport || "-"}
                />
              </div>

              {booking?.note ? (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-red-800">Note</p>
                  <p className="text-gray-600 mt-1">{booking.note}</p>
                </div>
              ) : null}
            </Card>

            <Card title="Trip Details">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Row label="Start Date" value={booking?.startDate} />
                <Row label="End Date" value={booking?.endDate} />
              </div>
            </Card>

            <Card title="Passengers">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
                <Row label="Adults" value={booking?.adults} />
                <Row label="Children" value={booking?.children} />
                <Row label="Babies" value={booking?.babies} />
              </div>

              <p className="mt-4 text-gray-800">
                Total Passengers:{" "}
                <span className="font-bold">{totalPassengers}</span>
              </p>
            </Card>
          </div>

          {/* Right */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 h-80 rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Cost Summary</h2>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Passengers</span>
                <span className="font-semibold">{totalPassengers}</span>
              </div>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Price per person</span>
                <span className="font-semibold">${pkg?.price ?? 0}</span>
              </div>

              <div className="border-t my-4" />

              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">Total</span>
                <span className="text-2xl font-extrabold text-sky-600">
                  ${Number(totalCost).toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleConfirm}
                className="w-full mt-6 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-lg hover:opacity-90 transition-all active:scale-95"
              >
                Confirm & Go to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div>
      <p className="text font-semibold text-gray-600">{label}</p>
      <p className="text-gray-400 font-semibold mt-1 break-words">
        {value ?? "-"}
      </p>
    </div>
  );
}
