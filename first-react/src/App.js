import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Footer from '../src/components/Footer';
import Home from "../src/components/pages/Home";
import Services from "../src/components/pages/Services";
import Products from "../src/components/pages/Products";
import SignUp from "../src/components/pages/SignUp";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
