import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneIcon from "@mui/icons-material/Phone";
import Divider from "@mui/material/Divider";
import Logo from "../../public/Logo.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

function AuthModal({ isModalOpen, setIsModalOpen }) {
  const [isRegister, setIsRegister] = useState(false);

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");

  // Register state
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [registerNameError, setRegisterNameError] = useState("");
  const [registerEmailError, setRegisterEmailError] = useState("");
  const [registerPasswordError, setRegisterPasswordError] = useState("");

  const handleClickShowLoginPassword = () => {
    setShowLoginPassword(!showLoginPassword);
  };

  const handleClickShowRegisterPassword = () => {
    setShowRegisterPassword(!showRegisterPassword);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    setLoginEmailError("");
    setLoginPasswordError("");

    if (!loginEmail) {
      setLoginEmailError("You must provide your email address");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(loginEmail)) {
      setLoginEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!loginPassword) {
      setLoginPasswordError("You must provide your password");
      isValid = false;
    }

    if (isValid) {
      console.log("Login form submitted successfully");
    }
  };

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

  return (
    <Modal
      open={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
        setIsRegister(false);
        setLoginPasswordError("");
        setLoginEmailError("");
        setRegisterPasswordError("");
        setRegisterEmailError("");
        setRegisterNameError("");
        setLoginPassword("");
        setLoginEmail("");
        setRegisterPassword("");
        setRegisterEmail("");
        setRegisterName("");
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <img
            src={Logo}
            alt="PickBazar"
            style={{
              height: 30,
              marginTop: 2,
              marginBottom: 20,
              width: 150,
            }}
          />
          <Typography fontSize={15} sx={{ mt: 1, mb: 2 }}>
            {isRegister
              ? "Register with your details"
              : "Login with your email & password"}
          </Typography>
        </Box>
        {isRegister ? (
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
              onChange={(e) => setRegisterEmail(e.target.value)}
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
                      {showRegisterPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
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
                  setIsRegister(false),
                    setRegisterName(""),
                    setRegisterEmail(""),
                    setRegisterPassword("");
                }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        ) : (
          <Box component="form" sx={{ mt: 2 }} onSubmit={handleLoginSubmit}>
            <InputLabel
              shrink
              htmlFor="login-email"
              sx={{ marginBottom: -1, fontWeight: "bold", fontSize: 19 }}
            >
              Email
            </InputLabel>
            <TextField
              fullWidth
              id="login-email"
              type="text"
              margin="normal"
              variant="outlined"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              error={Boolean(loginEmailError)}
              helperText={loginEmailError}
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
              htmlFor="login-password"
              sx={{ marginBottom: -1, fontWeight: "bold", fontSize: 19 }}
            >
              Password
            </InputLabel>
            <TextField
              fullWidth
              id="login-password"
              type={showLoginPassword ? "text" : "password"}
              margin="normal"
              variant="outlined"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              error={Boolean(loginPasswordError)}
              helperText={loginPasswordError}
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
                      onClick={handleClickShowLoginPassword}
                      edge="end"
                    >
                      {showLoginPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ textAlign: "right", mt: 1 }}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>
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
              Login
            </Button>
            <Divider sx={{ my: 2 }}>Or</Divider>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "#4285F4", mb: 1, pb: 1, pt: 1 }}
              startIcon={<GoogleIcon />}
            >
              Login with Google
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              startIcon={<PhoneIcon />}
              sx={{
                backgroundColor: "#6b7280",
                pb: 1,
                pt: 1,
                mb: 2,
                mt: 1,
                "&:hover": {
                  backgroundColor: "#6b7280",
                },
              }}
            >
              Login with Mobile number
            </Button>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don't have an account?{" "}
              <Link
                href="#"
                onClick={() => {
                  setIsRegister(true), setLoginEmail(""), setLoginPassword("");
                }}
              >
                Register
              </Link>
            </Typography>
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default AuthModal;
