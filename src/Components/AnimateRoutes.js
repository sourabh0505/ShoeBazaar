import React from "react";
import SignUp from "./SignUp/SignUp";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import ProductDetails from "./ProductDetails/ProductDetails";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimateRoutes() {
  const location = useLocation();
  const handleSignUp = (user) => {
    console.log(user);
  };

  const handleSignIn = (user) => {
    console.log(user);
  };

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          index
          path="/signup"
          element={<SignUp onSignup={handleSignUp} onSignin={handleSignIn} />}
        ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimateRoutes;
