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

function App() {
  

  return (
    <>
       
       <Router>
          <Navbar />
          {/* <Guide /> */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            
          </Routes>
          <Footer />
       </Router>
    </>
  )
}

export default App
