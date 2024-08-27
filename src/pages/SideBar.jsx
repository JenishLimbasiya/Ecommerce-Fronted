import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
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
import Breakfast from "../../public/Breakfast.svg";
import Cooking from "../../public/Cooking.svg";
import Dairy from "../../public/Dairy.svg";
import HomeAndCleaning from "../../public/Home & Cleaning.svg";
import Snacks from "../../public/Snacks.svg";
import PetAndCare from "../../public/Pet Care.svg";

const iconMap = {
  "Fruits & Vegetables": FruitsAndVegetables,
  "Health & Beauty": HealthAndBeauty,
  Beverage: Beverage,
  Breakfast: Breakfast,
  Cooking: Cooking,
  Dairy: Dairy,
  "Home & Cleaning": HomeAndCleaning,
  Snacks: Snacks,
  "Pet Care": PetAndCare,
};

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
    const iconSrc = iconMap[iconName];

    if (iconSrc) {
      return (
        <img src={iconSrc} alt={iconName} style={{ width: 20, height: 20 }} />
      );
    }

    return <CategoryIcon style={{ color: "#007b63", fontSize: 20 }} />;
  };

  return (
    <Box
      sx={{
        width: "240px",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        padding: "8px",
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
                borderRadius: "8px",
                marginBottom: "4px",
                marginLeft: "8px",
                marginRight: "8px",
                marginTop: "8px",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 0, marginRight: 1 }}>
                  {renderIcon(category?.name)}
                </ListItemIcon>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#333333",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "normal",
                    marginLeft: 1,
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
              <List
                component="div"
                disablePadding
                sx={{
                  marginLeft: 6,
                  // marginRight: "8px",
                }}
              >
                {category?.innerCategories.map((subCategory) => (
                  <ListItem
                    key={subCategory._id}
                    sx={{
                      padding: "6px 16px",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555555",
                        fontSize: "14px",
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
