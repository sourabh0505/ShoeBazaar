import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AnimateRoutes from "./Components/AnimateRoutes";

const App = () => {

  return (
    <div>
      <Router>
      <Navbar />
      <AnimateRoutes />
      <Footer />
    </Router>
    </div>
  );
};

export default App;
