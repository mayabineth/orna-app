import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Treat from "./pages/Treat";
import Mind from "./pages/Mind";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
import Endbar from "./components/Endbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mind" element={<Mind />} />
        <Route path="/treat" element={<Treat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Endbar />
    </Router>
  );
}

export default App;
