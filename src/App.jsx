import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'
import Home from '../src/pages/Home'
import Booking from '../src/pages/Booking'
import Contact from '../src/pages/Contact'
import About from '../src/pages/About'
import Btn from './components/homePage/Btn'

function App() {
  

  return (
    <>
       
       <Router>
          <Navbar />
          
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            
          </Routes>
       </Router>
    </>
  )
}

export default App
