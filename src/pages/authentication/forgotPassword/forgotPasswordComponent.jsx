import {
  Box,
  Button,
  Divider,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ForgotPasswordComponent(props) {
  const {
    setModalType,
    forgotEmailError,
    forgotEmail,
    setForgotEmail,
    setForgotEmailError,
  } = props;
  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();

    if (!forgotEmail) {
      setForgotEmailError("You must provide your email address");
      return false;
    }
    setForgotEmailError("");
    setForgotEmail("");
    console.log("Forgot password form submitted successfully");
  };

  const handleForgotEmailChange = (e) => {
    const email = e.target.value;
    setForgotEmail(email);
    if (!/\S+@\S+\.\S+/.test(email)) {
      setForgotEmailError("Please enter a valid email address");
    } else {
      setForgotEmailError("");
    }
  };

  return (
    <>
      <Typography id="forgot-password-modal-description" sx={{ mt: 2 }}>
        We'll send you a OTP to reset your password
      </Typography>
      <Box
        component="form"
        onSubmit={handleForgotPasswordSubmit}
        sx={{ mt: 2 }}
      >
        <InputLabel
          shrink
          htmlFor="forgot-email"
          sx={{ marginBottom: -2, fontWeight: "bold", fontSize: 19 }}
        >
          Email
        </InputLabel>
        <TextField
          fullWidth
          id="forgot-email"
          type="text"
          margin="normal"
          variant="outlined"
          value={forgotEmail}
          onChange={handleForgotEmailChange}
          error={Boolean(forgotEmailError)}
          helperText={forgotEmailError}
          FormHelperTextProps={{ sx: { marginLeft: 0 } }}
          sx={{ mb: 2 }}
          InputProps={{
            sx: {
              height: 44,
              borderRadius: 1,
              backgroundColor: "#f3f4f6",
            },
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            pb: 1,
            pt: 1,
            backgroundColor: "#009f7f",
            "&:hover": {
              backgroundColor: "#009f7f",
            },
          }}
        >
          Submit Email
        </Button>

        <Divider sx={{ my: 2 }}>Or</Divider>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Back to{" "}
          <Link
            href="#"
            onClick={() => {
              setModalType("login");
              setForgotEmail("");
            }}
            style={{ color: "#1976d2", textDecoration: "underline" }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </>
  );
}

export default ForgotPasswordComponent;
