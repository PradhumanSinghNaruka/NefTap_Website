// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Login from '../src/pages/Login';
// import { useState } from 'react';
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import Metal from './pages/Metal';
// import Enquire from './pages/Enquire';
// import About from './pages/About';
// import Pvc from './pages/Pvc';
// import Influencer from './pages/Influencer';
// import Engraved from './pages/Engraverd';
// import Contact from './pages/Contact';
// import Printing from './pages/Printing';
// import Address from './pages/Address';
// import Register from './pages/Register';
// import Payment from './pages/Payment';
// import Dashboard from './pages/dashboard/Slidebar';
// import Termcondition from './pages/Termcondition';
// import AddtoCart from './components/AddtoCart';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import ReturnRefund from './pages/ReturnRefund';
// import Publicprofile from './pages/dashboard/Publicprofile.js';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (product) => {
//     setCartItems((prev) => [...prev, product]);
//   };

//   const handleRemoveFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/metal" element={<Metal onAddToCart={handleAddToCart} />} />
//         <Route path="/enquire" element={<Enquire />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/pvc" element={<Pvc onAddToCart={handleAddToCart} />} />
//         <Route path="/influencer" element={<Influencer onAddToCart={handleAddToCart} />} />
//         <Route path="/engraved" element={<Engraved onAddToCart={handleAddToCart} />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/printing" element={<Printing />} />
//         <Route path="/address" element={<Address />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/termcondition" element={<Termcondition />} />
//         <Route path="/addtocart" element={<AddtoCart cartItems={cartItems} onRemove={handleRemoveFromCart} />} />
//         <Route path='/privacy' element={<PrivacyPolicy/>}/>
//         <Route path="/returnrefund" element={<ReturnRefund/>}/>
//         <Route path='/userdetail/profile/public/:id' element={<Publicprofile/>}/>
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from '../src/pages/Login';
import { useState } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Metal from './pages/Metal';
import Enquire from './pages/Enquire';
import About from './pages/About';
import Pvc from './pages/Pvc';
import Influencer from './pages/Influencer';
import Engraved from './pages/Engraverd';
import Contact from './pages/Contact';
import Printing from './pages/Printing';
import Address from './pages/Address';
import Register from './pages/Register';
import Payment from './pages/Payment';
import Dashboard from './pages/dashboard/Slidebar';
import Termcondition from './pages/Termcondition';
import AddtoCart from './components/AddtoCart';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReturnRefund from './pages/ReturnRefund';
import Publicprofile from './pages/dashboard/Publicprofile.js';

import React from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Hide navbar & footer on specific route
  const hideLayout = location.pathname.startsWith('/userdetail/profile/public/:id');

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/metal" element={<Metal onAddToCart={handleAddToCart} />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/about" element={<About />} />
        <Route path="/pvc" element={<Pvc onAddToCart={handleAddToCart} />} />
        <Route path="/influencer" element={<Influencer onAddToCart={handleAddToCart} />} />
        <Route path="/engraved" element={<Engraved onAddToCart={handleAddToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/printing" element={<Printing />} />
        <Route path="/address" element={<Address />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/termcondition" element={<Termcondition />} />
        <Route path="/addtocart" element={<AddtoCart cartItems={cartItems} onRemove={handleRemoveFromCart} />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/returnrefund" element={<ReturnRefund />} />
        <Route path="/userdetail/profile/public/:id" element={<Publicprofile />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

// function App() {
//   return (
//     <Router>
//       <AppWrapper />
//     </Router>
//   );
// }

export default App;

