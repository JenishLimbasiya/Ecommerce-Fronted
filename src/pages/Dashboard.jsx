import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Container,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import groceryDashboard from "../../public/groceryDashboard.png";
import ClearIcon from "@mui/icons-material/Clear";

export default function Dashboard() {
  const [searchText, setSearchText] = useState("");

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
            margin: "40px 0px",
          }}
        >
          Groceries Delivered in 90 Minutes
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontSize: "1.1rem", color: "gray", marginBottom: "40px" }}
        >
          Get your healthy foods & snacks delivered at your doorsteps all day,
          every day
        </Typography>
        <Container maxWidth={false} sx={{ mt: 3, maxWidth: "900px" }}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Shadow only from the bottom
              width: "100%",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search your product from here"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{
                flexGrow: 1,
                backgroundColor: "#fff",
                borderRadius: "8px 0 0 8px",
                "& .MuiOutlinedInput-root": {
                  border: "none",
                  fontSize: "0.875rem", // Smaller font size
                  "&:hover fieldset": {
                    borderColor: "#ccc",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#007b63",
                    borderWidth: "1px", // Thin border on focus
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "11px",
                },
              }}
              InputProps={{
                sx: { pl: 1 },
                endAdornment: (
                  <InputAdornment position="end">
                    {searchText && (
                      <IconButton
                        onClick={() => setSearchText("")}
                        edge="end"
                        size="small"
                      >
                        <ClearIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#007b63",
                color: "#fff",
                borderRadius: "0 8px 8px 0",
                padding: "8px 30px",
                fontSize: "0.875rem",
                "&:hover": {
                  backgroundColor: "#005f4a",
                },
                textTransform: "none",
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
