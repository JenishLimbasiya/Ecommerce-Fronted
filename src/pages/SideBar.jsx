import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryIcon from "@mui/icons-material/Category";
import instance from "../hooks/axios";
import { SIDEBAR } from "../api/endPoints";
import FruitsAndVegetables from "../../public/Fruits & Vegetables.svg";
import HealthAndBeauty from "../../public/Health & Beauty.svg";
import Beverage from "../../public/Beverage.svg";
import Breakfast from "../../Breakfast.svg";
import Cooking from "../../Cooking.svg";
import Dairy from "../../public/Dairy.svg";
import HomeAndCleaning from "../../public/Home & Cleaning.svg";
import Snacks from "../../public/Snacks.svg";
import PetAndCare from "../../public/Pet Care.svg";

export default function SideBar() {
  const [data, setData] = useState([]);
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(SIDEBAR);
        setData(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleToggle = (id) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === id ? null : id));
  };

  const renderIcon = (iconName) => {
    console.log("iconName", iconName);
    if ("apple" === "apple") {
      return (
        <img
          src={FruitsAndVegetables}
          alt="Apple"
          style={{ width: 21, height: 21 }}
        />
      );
    }
    return <CategoryIcon style={{ color: "#007b63", fontSize: 24 }} />;
  };

  return (
    <Box
      sx={{
        width: "240px",
        backgroundColor: "#f9f9f9", // Softer light background color
        borderRadius: "12px", // Slightly larger border-radius for a more modern look
        overflow: "hidden", // Prevent content from overflowing
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // A bit more shadow for better depth
        padding: "8px", // Add padding around the sidebar
      }}
    >
      <List component="nav">
        {data.map((category) => (
          <div key={category?._id}>
            <ListItem
              button
              onClick={() => handleToggle(category?._id)}
              sx={{
                padding: "12px 16px",
                borderRadius: "8px", // Rounded corners for list items
                marginBottom: "4px", // Space between items
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Space between icon and text
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemIcon> {renderIcon(category?.name)} </ListItemIcon>
                <Typography
                  variant="body2" // Enforces 14px font size
                  sx={{
                    color: "#333333",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "normal",
                  }}
                >
                  {category?.name}
                </Typography>
              </Box>
              {openItem === category?._id ? (
                <ExpandLessIcon sx={{ fontSize: "16px", color: "#007b63" }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: "16px", color: "#007b63" }} />
              )}
            </ListItem>
            <Collapse
              in={openItem === category?._id}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {category?.innerCategories.map((subCategory) => (
                  <ListItem
                    key={subCategory._id}
                    sx={{
                      pl: "60px", // Increased left margin for innerCategories
                      padding: "6px 16px",
                    }}
                  >
                    <Typography
                      variant="body2" // Enforces 14px font size for innerCategories
                      sx={{
                        color: "#555555",
                        fontSize: "14px",
                        ml: "55px",
                      }}
                    >
                      {subCategory.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Box>
  );
}
