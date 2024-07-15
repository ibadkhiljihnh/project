import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
// import Login from './components/Login'
import "./App.css"
import Product from './components/Product';
import Pricing from './components/Pricing';
import Restraction from './components/Restraction';
import Feature from './components/Feature';
import Home from './components/Home';
import Sign from './components/Sign';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/main" element={<Main />} />
          <Route path="/" element={<Navigate replace to="/sign" />} />
          <Route exact path="/restraction" element={<Restraction/>} />
          <Route exact path="/sign" element={<Sign />} />
          {/*<Route exact path="/login"element={<Login/>}/> */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/restraction" element={<Restraction />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App  