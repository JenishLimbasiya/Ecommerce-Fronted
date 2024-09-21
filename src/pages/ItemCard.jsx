import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import instance from "../hooks/axios"; // Your axios instance
import { ITEMCARD } from "../api/endPoints"; // Your API endpoint

export default function ItemCardList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(ITEMCARD);
        setData(response?.data?.data || []);
      } catch (err) {
        setError("Error fetching data");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-3.5 p-8">
      {loading && (
        <div className="w-full text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      )}
      {error && (
        <div className="w-full text-center">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      {!loading && !error && data.length > 0
        ? data.map((item) => <ItemCard key={item._id} item={item} />)
        : !loading &&
          !error && (
            <div className="w-full text-center">
              <p className="text-gray-500">No items available</p>
            </div>
          )}
    </div>
  );
}

function ItemCard({ item }) {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleRemove = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const discount =
    item?.price && item?.disprice
      ? Math.round(((item.price - item.disprice) / item.price) * 100)
      : null;

  return (
    <div className="flex flex-col w-[293px] h-[420px] rounded-md bg-white relative border border-gray-200 overflow-hidden">
      {discount && (
        <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs rounded-full px-2.5 py-1">
          {`${discount}%`}
        </div>
      )}

      <div className="h-[256px] w-full bg-red-500">
        <img
          src={item?.productImage?.[item?.productImage?.length - 1]}
          alt={item?.name || "Product"}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between h-full px-5 py-6">
        <div>
          <h2 className="text-sm font-semibold mb-2">
            {item?.name || "Unnamed Product"}
          </h2>
          <p className="text-gray-400 text-xs">
            {item?.productValue || "No description"}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 line-through">
              ${item?.price?.toFixed(2)}
            </p>
            <p className="text-base text-green-600 font-semibold mt-1">
              ${item?.disprice?.toFixed(2)}
            </p>
          </div>

          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className={`bg-white ${
                quantity === 0 ? "text-[#009f7f]" : "bg-[#009f7f] text-white"
              } border-[1.5px] border-gray-200 hover:bg-[#009f7f] hover:text-white font-bold py-2 px-5 rounded-full flex items-center gap-2 group transition-all duration-200`}
            >
              <ShoppingBasketRoundedIcon
                className={`text-[#009f7f] ${
                  quantity > 0 ? "text-white" : "group-hover:text-white"
                } text-sm`}
                style={{ fontSize: "18px" }}
              />
              <span className="text-sm" style={{ fontSize: "14px" }}>
                {quantity === 0 ? "Cart" : "Added"}
              </span>
            </button>
          ) : (
            <div className="flex items-center">
              <button
                onClick={handleRemove}
                className="bg-[#009f7f] text-white font-bold py-1 px-3 rounded-l-full transition-all duration-200 flex items-center justify-center"
              >
                <span className="text-lg" style={{ fontSize: "18px" }}>
                  −
                </span>
              </button>

              <span className="text-lg font-semibold bg-[#009f7f] text-white py-1 px-2 rounded-none">
                {quantity}
              </span>

              <button
                onClick={handleAdd}
                className="bg-[#009f7f] text-white font-bold py-1 px-3 rounded-r-full transition-all duration-200 flex items-center justify-center"
              >
                <span className="text-lg" style={{ fontSize: "18px" }}>
                  +
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
