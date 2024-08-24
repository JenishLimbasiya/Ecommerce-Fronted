import Index from "./pages/Index";
import { Routes, Route } from "react-router-dom";
import Toast from "./pages/Toast";
import React from "react";

export default function App() {
  return (
    <React.Fragment>
      <Toast />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </React.Fragment>
  );
}
