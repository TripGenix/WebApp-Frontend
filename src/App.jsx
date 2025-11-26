
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import './App.css'
import Home from '../src/pages/Home'
import Booking from '../src/pages/Booking'
import Contact from '../src/pages/Contact'
import About from '../src/pages/About'
import Btn from './components/homePage/Btn'
import Guide from './components/homePage/guide'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import CustomPackage from "./pages/CustomBooking";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import PrivateRoute from "./route/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";

function App() {
  return (

    <>
       
       <Router>
          <Navbar />
          {/* <Guide /> */}
          
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            
          </Routes>
          <Footer />
       </Router>
    </>
  )
    <BrowserRouter>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CustomPackage" element={<CustomPackage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
