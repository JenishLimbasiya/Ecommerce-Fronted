import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Sliders from "./Sliders";
import SideBar from "./SideBar";

export default function Index() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Sliders />
      <SideBar />
    </div>
  );
}
