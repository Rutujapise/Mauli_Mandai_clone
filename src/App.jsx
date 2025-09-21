import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './Pages/Home'
import FreshVeggies from './Pages/FreshVeggies'
import FreshFruits from './Pages/FreshFruits'
import Navbar from './Component/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SecondNavbar from './Component/SecondNavbar';

function App() {

  return (
    <Router>
      <Navbar />
      <SecondNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fresh-veggies" element={<FreshVeggies />} />
        <Route path="/fresh-fruits" element={<FreshFruits />} />
      </Routes>
    </Router>
  )
}

export default App
