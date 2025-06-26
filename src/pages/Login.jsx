import React, { useState } from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const signupBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 350,
  width: 300,
  bgcolor: "rgb(246, 250, 246)",
  borderRadius: 2,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  mx: "auto",
};

const submitBtncss = {
  position: "relative",
  left: "1.3em",
  right: "1em",
  top: "1.2em",
  borderRadius: 4,
  height: 30,
  width: 270,
  bgcolor: "rgb(17, 102, 17)",
  fontSize: 12,
};

const loginBtncss = {
  ...submitBtncss,
  bgcolor: "white",
  mt: 1,
  color: "rgb(17, 102, 17)",
  border: "1px solid rgb(17, 102, 17)",
};

export default function Login() {
  const [open, setOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="signup-container">
      <Button
        sx={{
          p: 0,
          color: "rgb(29, 28, 28)",
          fontSize: "16px",
          fontWeight: 600,
          textTransform: "none",
          "&:hover": {
            color: "rgb(252, 252, 252)",
            bgcolor: "transparent",
          },
        }}
        onClick={handleOpen}
        variant="text"
      >
        Login
      </Button>
      <Modal open={open} onClose={handleClose}>
        {!loginModal ? (
          <Box sx={{ ...signupBox }}>
            <div className="signup-title">Signup</div>
            <div className="signup-fields">
              <label>Name:</label>
              <input type="text"></input>
            </div>
            <div className="signup-fields">
              <label>Phone:</label>
              <input type="number"></input>
            </div>
            <div className="signup-fields">
              <label>Password:</label>
              <input type="password"></input>
            </div>
            <div className="signup-fields">
              <label>Confirm-Password:</label>
              <input type="password"></input>
            </div>
            <Button sx={{ ...submitBtncss }} variant="contained">
              Submit
            </Button>
            <Button
              sx={{ ...loginBtncss }}
              variant="outlined"
              onClick={() => setLoginModal(true)}
            >
              Login
            </Button>
          </Box>
        ) : (
          <Box sx={{ ...signupBox, height: 250 }}>
            <div className="signup-title">Login</div>

            <div className="signup-fields">
              <label>Phone:</label>
              <input type="phone"></input>
            </div>
            <div className="signup-fields">
              <label>Password:</label>
              <input type="password"></input>
            </div>
            <Button sx={{ ...submitBtncss }} variant="contained">
              Submit
            </Button>
            <Button
              sx={{ ...loginBtncss }}
              variant="outlined"
              onClick={() => setLoginModal(false)}
            >
              Signup
            </Button>
          </Box>
        )}
      </Modal>
    </div>
  );
}
