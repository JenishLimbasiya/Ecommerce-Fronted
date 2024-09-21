import React from "react";
import SideBar from "./SideBar";
import ItemCard from "./ItemCard";

export default function Product() {
  return (
    <div className="flex">
      <SideBar className="w-60" />
      <div className="flex-1 bg-[#f3f4f6]">
        <ItemCard />
      </div>
    </div>
  );
}
