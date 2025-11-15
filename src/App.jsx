import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'
import Home from '../src/pages/Home'
import Booking from '../src/pages/Booking'
import Contact from '../src/pages/Contact'

function App() {
  

  return (
    <>
       
       <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Contact" element={<Contact />} />
            
          </Routes>
       </Router>
    </>
  )
}

export default App
