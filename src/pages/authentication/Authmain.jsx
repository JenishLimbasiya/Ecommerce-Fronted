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
  const [resetState, setResetState] = useState(null);

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setModalType("login");
          if (resetState) {
            resetState();
          }
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
              setModalType={setModalType}
              setResetState={setResetState}
            />
          )}
          {modalType === "signup" && (
            <SignupComponent
              setModalType={setModalType}
              setResetState={setResetState}
            />
          )}
          {modalType === "forgotPassword" && (
            <ForgotPasswordComponent
              setModalType={setModalType}
              setResetState={setResetState}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}

export default AuthMain;
