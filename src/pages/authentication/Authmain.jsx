import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../../public/Logo.jpg";
import LoginComponent from "./login/LoginComponent";
import SignupComponent from "./signUp/SignupComponent";
import ForgotPasswordComponent from "./forgotPassword/ForgotPasswordComponent";

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

function AuthMain({ isModalOpen, setIsModalOpen }) {
  const [modalType, setModalType] = useState("login");
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotEmailError, setForgotEmailError] = useState("");

  console.log("forgotEmailError", forgotEmailError);
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

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setModalType("login");
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
          setForgotEmail("");
          setForgotEmailError("");
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
          </Box>
          {modalType === "login" && (
            <LoginComponent
              loginEmail={loginEmail}
              setLoginEmail={setLoginEmail}
              loginEmailError={loginEmailError}
              showLoginPassword={showLoginPassword}
              loginPassword={loginPassword}
              setLoginPassword={setLoginPassword}
              loginPasswordError={loginPasswordError}
              setLoginEmailError={setLoginEmailError}
              setLoginPasswordError={setLoginPasswordError}
              setShowLoginPassword={setShowLoginPassword}
              setModalType={setModalType}
            />
          )}
          {modalType === "signup" && (
            <SignupComponent
              setModalType={setModalType}
              registerName={registerName}
              setRegisterName={setRegisterName}
              registerNameError={registerNameError}
              registerEmail={registerEmail}
              registerEmailError={registerEmailError}
              showRegisterPassword={showRegisterPassword}
              registerPassword={registerPassword}
              registerPasswordError={registerPasswordError}
              setRegisterEmail={setRegisterEmail}
              setRegisterPassword={setRegisterPassword}
              setRegisterPasswordError={setRegisterPasswordError}
              setRegisterEmailError={setRegisterEmailError}
              setRegisterNameError={setRegisterNameError}
              setShowRegisterPassword={setShowRegisterPassword}
            />
          )}
          {modalType === "forgotPassword" && (
            <ForgotPasswordComponent
              setForgotEmailError={setForgotEmailError}
              setForgotEmail={setForgotEmail}
              forgotEmail={forgotEmail}
              forgotEmailError={forgotEmailError}
              setModalType={setModalType}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}

export default AuthMain;
