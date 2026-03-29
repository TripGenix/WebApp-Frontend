import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import CustomPackage from "./pages/CustomBooking";
import UserLogin from "./pages/UserLogin";
import Faq from "./pages/FAQ";
import UserRegister from "./pages/UserRegister";
import PrivateRoute from "./route/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import FeaturedTours from "./pages/FeaturedTours";
import DefaultBooking from "./pages/DefaultPackages/DefaultBooking";
import DefaultBookingSummary from "./pages/DefaultPackages/DefaultBookingSummary";
import PaymentPage from "./pages/payment/PaymentPage";
import About from './pages/About';
import Profile from './pages/profile';
import EditProfile from "./pages/EditProfile"; 

import Test from './pages/test'
import AOS from "aos";
import "aos/dist/aos.css";
import CanclePayment from "./pages/payment/CanclePayment";
import SuccessPayment from "./pages/payment/SuccessPayment";
import DefPaymentPage from "./pages/DefaultPackages/_DefPaymentPage";

import TourGuidePage from "./components/tourguide/TourGuidePage";
import Mypayments from "./pages/Mypayments";
import Support from "./pages/Support";
import Logout from "./pages/Logout";
import VehicleView from "./pages/VehicleView";  



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

            <div className="pt-[80px]">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/CustomPackage" element={<CustomPackage />} />
        <Route path="/DefaultBooking" element={<DefaultBooking />} />
        <Route path="/DefaultBookingSummary" element={<DefaultBookingSummary />} />
        <Route path="/VehicleView" element={<VehicleView />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/defpayment" element={<DefPaymentPage />} />
        <Route path="/payment/:tourId" element={<PaymentPage />} />
        <Route path="cancel-tour" element={<CanclePayment />} />
        <Route path="/payment-success" element={<SuccessPayment />} />


        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/FeaturedTours" element={<FeaturedTours />} />

        {/* Tour Guide Page */}
        <Route path="/TourGuide" element={<TourGuidePage />} />
        <Route path="/test" element={<Test />} />
          <Route path="/payments" element={<Mypayments />} />
          <Route path="/support" element={<Support />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/defpayment" element={<DefPaymentPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;