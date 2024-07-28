import React from "react";
import { Box, Typography, TextField, Container, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import groceryDashboard from "../../public/groceryDashboard.png";

export default function Dashboard() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${groceryDashboard}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{ textAlign: "center", color: "#fff", maxWidth: "80%", mx: "auto" }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "black",
            fontFamily: "'Roboto', sans-serif", // Replace with your font family
          }}
        >
          Groceries Delivered in 90 Minutes
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontSize: "1.1rem", color: "gray" }}
        >
          Get your healthy foods & snacks delivered at your doorsteps all day,
          every day
        </Typography>
        <Container maxWidth="md" sx={{ mt: 3 }}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Shadow only from the bottom
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search your product from here"
              sx={{
                flexGrow: 1,
                backgroundColor: "#fff",
                borderRadius: "8px 0 0 8px",
                "& .MuiOutlinedInput-root": {
                  border: "none",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              InputProps={{
                sx: { pl: 2 },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#007b63",
                color: "#fff",
                borderRadius: "0 8px 8px 0",
                padding: "8px 24px", // Adjusted padding for consistent height
                "&:hover": {
                  backgroundColor: "#005f4a",
                },
              }}
            >
              <SearchIcon sx={{ mr: 1 }} />
              Search
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
