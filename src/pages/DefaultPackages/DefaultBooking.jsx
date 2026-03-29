import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
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


export default function DefaultBooking() {
  const nav = useNavigate();
  const location = useLocation();
  const hydratedRef = useRef(false);

  const [pkg, setPkg] = useState(null);

  const emptyForm = {
    bookerName: "",
    email: "",
    whatsapp: "",
    passport: "",
    arrivalDateTime: "",
    departureDateTime: "",
    flightNumber: "",
    departureAirport: "",
    startDate: "",     
    endDate: "",      
    adults: 0,
    children: 0,
    babies: 0,
    note: "",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    hydratedRef.current = false;

    const fromStatePkg = location.state?.pkg;

    let nextPkg = null;

    if (fromStatePkg) {
      nextPkg = fromStatePkg;
      localStorage.setItem("selectedPackage", JSON.stringify(fromStatePkg));
    } else {
      const savedPkg = localStorage.getItem("selectedPackage");
      if (savedPkg) nextPkg = JSON.parse(savedPkg);
    }

    setPkg(nextPkg);

    const draftRaw = localStorage.getItem("defaultBookingDraft");
    const draft = draftRaw ? JSON.parse(draftRaw) : null;

    const samePackage =
      draft?.pkg?.id &&
      nextPkg?.id &&
      String(draft.pkg.id) === String(nextPkg.id);

    if (samePackage && draft?.booking) {
      setForm({ ...emptyForm, ...draft.booking });
    } else {
      setForm(emptyForm);
      localStorage.removeItem("defaultBookingDraft");
    }

    hydratedRef.current = true;
  }, [location.state]);

  const totalPassengers = useMemo(() => {
    const a = Number(form.adults) || 0;
    const c = Number(form.children) || 0;
    const b = Number(form.babies) || 0;
    return a + c + b;
  }, [form.adults, form.children, form.babies]);

  const totalCost = useMemo(() => {
    const price = Number(pkg?.price) || 0;
    return totalPassengers * price;
  }, [totalPassengers, pkg?.price]);

  useEffect(() => {
    if (!hydratedRef.current) return;
    if (!pkg) return;

    const payload = {
      pkg,
      booking: form,
      totalPassengers,
      totalCost,
    };

    localStorage.setItem("defaultBookingDraft", JSON.stringify(payload));
  }, [pkg, form, totalPassengers, totalCost]);

  const setField = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const parseDurationDays = (duration) => {
    const match = String(duration || "").match(/(\d+)/);
    return match ? Number(match[1]) : 0;
  };

  const diffDays = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    if (isNaN(s.getTime()) || isNaN(e.getTime())) return null;

    const ms = e.getTime() - s.getTime();
    return Math.round(ms / (1000 * 60 * 60 * 24));
  };

  const handleNext = () => {
    if (!pkg) return;

    if (!form.bookerName){
      toast.error("Please fill Name");
      return;
    }else if(!form.email || !/\S+@\S+\.\S+/.test(form.email)){
      toast.error("Please enter a valid Email address.");
      return;
    }else if(totalPassengers <= 0){
      toast.error("Please enter at least 1 passenger.");
      return;
    } 
    if(!form.passport){
      toast.error("Please fill in your Passport Number.");
      return;
    }
    if(!form.flightNumber){
      toast.error("Please fill in your Flight Number.");
      return;
    }else if(!form.departureAirport){
      toast.error("Please fill in your Departure Airport.");
      return;
    }
    if (!form.startDate || !form.endDate) {
      toast.error("Please select both Start Date and End Date.");
      return;
    }
    if (!form.arrivalDateTime || !form.departureDateTime) {
      toast.error("Please select both Arrival and Departure date & time.");
      return;
    }

    const pkgDays = parseDurationDays(pkg.duration);
    const daysBetween = diffDays(form.startDate, form.endDate);

    if (daysBetween === null) {
      toast.error("Invalid date format. Please re-select dates.");
      return;
    }

    if (daysBetween <= 0) {
      toast.error("End date must be after Start date.");
      return;
    }

    if (daysBetween !== pkgDays) {
      toast.error(
        `Trip duration must be exactly ${pkgDays} day(s) based on the package.`
      );
      return;
    }

    const payload = { pkg, booking: form, totalPassengers, totalCost };
    localStorage.setItem("defaultBookingDraft", JSON.stringify(payload));
    nav("/DefaultBookingSummary", { state: payload });
  };

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">
          No package selected. Go back and choose a package.
        </p>
      </div>
    );
  }

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
      <BookingFlowStepper activeStep={0} completed={{}} />

      <div className="max-w-8xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Booking Details</h1>
            <p className="text-gray-600 mt-1">
              Package: <span className="font-semibold">{pkg.name}</span> • $
              {pkg.price} per person
            </p>
          </div>

          <button
            onClick={() => nav(-1)}
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booker Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Field label="Full Name">
              <input
                value={form.bookerName}
                onChange={(e) => setField("bookerName", e.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </Field>

            <Field label="Email Address">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </Field>

            <Field label="Whatsapp Phone Number">
              <input
                value={form.whatsapp}
                onChange={(e) => setField("whatsapp", e.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </Field>

            <Field label="Passport Number">
              <input
                value={form.passport}
                onChange={(e) => setField("passport", e.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </Field>

            <Field label="Arrival Date and Time">
              <input
                type="datetime-local"
                value={form.arrivalDateTime}
                onChange={(e) => setField("arrivalDateTime", e.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </Field>

            <Field label="Departure Date and Time">
              <input
                type="datetime-local"
                value={form.departureDateTime}
                onChange={(e) => setField("departureDateTime", e.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </Field>

            <Field label="Flight Number">
              <input
                value={form.flightNumber}
                onChange={(e) => setField("flightNumber", e.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </Field>

            <Field label="Departure Airport">
              <input
                value={form.departureAirport}
                onChange={(e) => setField("departureAirport", e.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </Field>
          </div>

          {/* Trip details */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Field label="Start Date">
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) => setField("startDate", e.target.value)}
                  className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </Field>

              <Field label="End Date">
                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) => setField("endDate", e.target.value)}
                  className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </Field>
            </div>
          </div>

          {/* Passenger count */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Passenger Count</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Field label="Adults">
                <input
                  type="number"
                  min="0"
                  value={form.adults}
                  onChange={(e) => setField("adults", e.target.value)}
                  className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </Field>

              <Field label="Children">
                <input
                  type="number"
                  min="0"
                  value={form.children}
                  onChange={(e) => setField("children", e.target.value)}
                  className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </Field>

              <Field label="Babies">
                <input
                  type="number"
                  min="0"
                  value={form.babies}
                  onChange={(e) => setField("babies", e.target.value)}
                  className="w-full h-12 rounded-lg border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </Field>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8">
            <textarea
              value={form.note}
              onChange={(e) => setField("note", e.target.value)}
              className="w-full min-h-[120px] rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Add a special note for yourself or any passenger."
            />
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t pt-6">
            <div className="text-gray-700">
              <p>
                Total Passengers:{" "}
                <span className="font-bold">{totalPassengers}</span>
              </p>
              <p>
                Estimated Total:{" "}
                <span className="font-bold text-sky-600">
                  ${Number(totalCost).toFixed(2)}
                </span>
              </p>
            </div>

            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-lg hover:opacity-90 transition-all active:scale-95"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-800">{label}</label>
      {children}
    </div>
  );
}
