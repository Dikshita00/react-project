import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginDemo from "./Login";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginDemo />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
