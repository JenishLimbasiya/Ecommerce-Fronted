import React, { useEffect, useState } from "react";
import { Button, Typography, Box, Card, CardMedia, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ProductDetails } from "../api/endPoints";
import { instance } from "../hooks/axios";

export default function ProductDetailsPage() {
  const [data, setData] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          `${ProductDetails}/${"66cf4f228ea20d8694fcb784"}`
        );
        setData(response?.data?.data);
        setSelectedImage(response?.data?.data?.productImage?.[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={2} className="p-4">
      {/* Left Section: Product Image */}
      <Grid item xs={12} md={6}>
        <Card className="shadow-lg">
          <CardMedia
            component="img"
            sx={{
              height: { xs: "auto", md: "500px" }, // Maintain big image on large screens
              maxHeight: "500px", // Max height for the image
              maxWidth: "100%", // Ensure it takes up full width
              objectFit: "contain", // Image should maintain its aspect ratio
            }}
            image={selectedImage}
            alt="product"
          />
        </Card>

        {/* Thumbnail Gallery */}
        <Box
          className="flex mt-4"
          sx={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
          }}
        >
          {data?.productImage?.map((image, index) => (
            <Box
              key={index}
              className={`cursor-pointer border ${
                selectedImage === image ? "border-blue-500" : ""
              }`}
              onClick={() => setSelectedImage(image)}
              sx={{
                margin: 1, // space between thumbnails
              }}
            >
              <CardMedia
                component="img"
                image={image}
                alt={`Thumbnail ${index}`}
                sx={{ width: 80, height: 80 }}
              />
            </Box>
          ))}
        </Box>
      </Grid>

      {/* Right Section: Product Details */}
      <Grid item xs={12} md={6}>
        <Box className="px-4 mt-4 md:mt-0">
          <Typography variant="h4" className="font-semibold text-gray-800 mb-2">
            {data?.name}
          </Typography>

          <Typography variant="body1" className="text-gray-600 mb-4">
            {data?.description}
          </Typography>

          {/* Price Section */}
          <Box className="flex items-center mb-4">
            <Typography
              variant="h5"
              className="font-semibold"
              sx={{ color: "#009f7f" }} // Update discount price text color
            >
              ${data?.disprice}
            </Typography>
            <Typography
              variant="body2"
              className="line-through ml-2 text-gray-500"
            >
              ${data?.price}
            </Typography>
            <Typography
              variant="body2"
              className="ml-2 text-yellow-500 font-semibold"
            >
              20% OFF
            </Typography>
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            sx={{
              backgroundColor: "#009f7f", // Default background color
              color: "#ffffff", // Text color
              width: "100%",
              py: 2,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#007b63", // Hover background color
              },
            }}
          >
            Add to Shopping Cart
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
