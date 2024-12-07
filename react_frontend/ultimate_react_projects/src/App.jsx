import React from "react";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* Any of the two paths will take us to one default location */}
        <Route path="/" element={<Navigate to="/employees" />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<EmployeeComponent />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
