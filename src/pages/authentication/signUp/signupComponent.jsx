import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SignupComponent(props) {
  const {
    // registerName,
    // setRegisterName,
    // registerNameError,
    // registerEmail,
    // registerEmailError,
    // showRegisterPassword,
    // registerPassword,
    // registerPasswordError,
    // setRegisterEmail,
    // setRegisterPassword,
    // setRegisterPasswordError,
    // setRegisterEmailError,
    // setRegisterNameError,
    // setShowRegisterPassword,
    setModalType,
    setResetState,
  } = props;

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [registerNameError, setRegisterNameError] = useState("");
  const [registerEmailError, setRegisterEmailError] = useState("");
  const [registerPasswordError, setRegisterPasswordError] = useState("");

  const resetSignupState = () => {
    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setShowRegisterPassword(false);
    setRegisterNameError("");
    setRegisterEmailError("");
    setRegisterPasswordError("");
  };

  useEffect(() => {
    setResetState(resetSignupState);
  }, []);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    setRegisterNameError("");
    setRegisterEmailError("");
    setRegisterPasswordError("");

    if (!registerName) {
      setRegisterNameError("You must provide your name");
      isValid = false;
    }

    if (!registerEmail) {
      setRegisterEmailError("You must provide your email address");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(registerEmail)) {
      setRegisterEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!registerPassword) {
      setRegisterPasswordError("You must provide your password");
      isValid = false;
    }

    if (isValid) {
      console.log("Registration form submitted successfully");
    }
  };

  const handleChangeRegister = (e) => {
    const email = e.target.value;
    setRegisterEmail(email);
    if (!/\S+@\S+\.\S+/.test(email)) {
      setRegisterEmailError("Please enter a valid email address");
    } else {
      setRegisterEmailError("");
    }
  };

  const handleClickShowRegisterPassword = () => {
    setShowRegisterPassword(!showRegisterPassword);
  };
  return (
    <>
      <Box component="form" sx={{ mt: 2 }} onSubmit={handleRegisterSubmit}>
        <InputLabel
          shrink
          htmlFor="name"
          sx={{ marginBottom: -1, fontWeight: "bold", fontSize: 19 }}
        >
          Name
        </InputLabel>
        <TextField
          fullWidth
          id="name"
          type="text"
          margin="normal"
          variant="outlined"
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
          error={Boolean(registerNameError)}
          helperText={registerNameError}
          FormHelperTextProps={{ sx: { marginLeft: 0 } }}
          sx={{ mb: 2 }}
          InputProps={{
            sx: {
              height: 44,
              borderRadius: 1,
            },
          }}
        />
        <InputLabel
          shrink
          htmlFor="register-email"
          sx={{ marginBottom: -1, fontWeight: "bold", fontSize: 19 }}
        >
          Email
        </InputLabel>
        <TextField
          fullWidth
          id="register-email"
          type="text"
          margin="normal"
          variant="outlined"
          value={registerEmail}
          // onChange={(e) => setRegisterEmail(e.target.value)}
          onChange={handleChangeRegister}
          error={Boolean(registerEmailError)}
          helperText={registerEmailError}
          FormHelperTextProps={{ sx: { marginLeft: 0 } }}
          sx={{ mb: 2 }}
          InputProps={{
            sx: {
              height: 44,
              borderRadius: 1,
            },
          }}
        />
        <InputLabel
          shrink
          htmlFor="register-password"
          sx={{ marginBottom: -1, fontWeight: "bold", fontSize: 19 }}
        >
          Password
        </InputLabel>
        <TextField
          fullWidth
          id="register-password"
          type={showRegisterPassword ? "text" : "password"}
          margin="normal"
          variant="outlined"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          error={Boolean(registerPasswordError)}
          helperText={registerPasswordError}
          FormHelperTextProps={{ sx: { marginLeft: 0 } }}
          sx={{ mb: 2 }}
          InputProps={{
            sx: {
              height: 44,
              borderRadius: 1,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRegisterPassword}
                  edge="end"
                >
                  {showRegisterPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
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
          Register
        </Button>
        <Divider sx={{ my: 2 }}>Or</Divider>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link
            href="#"
            onClick={() => {
              setModalType("login"),
                setRegisterName(""),
                setRegisterEmail(""),
                setRegisterPassword(""),
                setRegisterPasswordError(""),
                setRegisterEmailError(""),
                setRegisterNameError("");
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
