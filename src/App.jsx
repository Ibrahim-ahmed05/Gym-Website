import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import React from "react";
import Home from './components/Home';
import Bmi from './components/Bmi';
import Plans from './components/Plans';
import Guide from './components/Guide';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
}from "react-router-dom";
function App() {
  return (
    <>
    <div width="400px">
    <BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/bmi" element={<Bmi/>}></Route>
  <Route path="/plans" element={<Plans/>}></Route>
  <Route path="/guide" element={<Guide/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
</Routes>
</BrowserRouter>
</div>
    </>
  )
}
export default App;

