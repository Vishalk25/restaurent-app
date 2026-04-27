import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContextProvider";
import "./Login.modal.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const signupBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fullScreen: "fullScreen",
  bgcolor: "rgb(246, 250, 246)",
  borderRadius: 2,
  boxShadow: 24,

};

const submitBtncss = {
  borderRadius: 4,
  height: 30,
  width: "48%",
  bgcolor: "rgb(17, 102, 17)",
  fontSize: 12,
  "&:hover": {
    boxShadow: "0 3px 5px rgba(36, 36, 36, 0.5)",
  },
};

const loginBtncss = {
  ...submitBtncss,
  bgcolor: "white",
  color: "rgb(17, 102, 17)",
  border: "1px solid rgb(17, 102, 17)",
};

export default function LoginPage(props) {
    const { open, handleClose } = props;
  const [loginModal, setLoginModal] = useState(true);
  const [loginDet, setLogin] = useState({ username: "", pass: "" });
  const { login } = useContext(LoginContext);

  

  function authForm(e) {
    console.log("eeee", loginDet);
    e.preventDefault();
    const admin = { username: "havearound.admin@gmail.com", pass: "Password" };
    const user = { username: "havearound.user@gmail.com", pass: "Password" };

    if (loginDet.username === admin.username && loginDet.pass === admin.pass) {
      alert("Login successful!");
      login({ email: loginDet.username, username: "Admin" });
      setOpen(false);
    } else if (
      loginDet.username === user.username &&
      loginDet.pass === user.pass
    ) {
      alert("Login successful!");
      login({ email: loginDet.username, username: "User" });
      setOpen(false);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }

  return (
    <div className="signup-container">
      
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={"xs"}
        maxWidth={"xs"}
      >
        {loginModal ? (
          <div className="modal-box">
            <DialogTitle className="signup-title">{"Login"}
            </DialogTitle>
            <form>
              <div className="signup-fields">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) =>
                    setLogin({ ...loginDet, username: e.target.value })
                  }
                  value={loginDet.username}
                ></input>
              </div>
              <div className="signup-fields">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setLogin({ ...loginDet, pass: e.target.value })
                  }
                  value={loginDet.pass}
                ></input>
              </div>
              <div className="Btncss">
                <Button
                  sx={{ ...submitBtncss }}
                  variant="contained"
                  onClick={(e) => authForm(e)}
                >
                  Submit
                </Button>
                <Button
                  sx={{ ...loginBtncss }}
                  variant="outlined"
                  onClick={() => setLoginModal(false)}
                >
                  Signup
                </Button>
              </div>
            </form>
            <div id="login-cred">
              <span>
                <b>Admin:</b> <span>havearound.admin@gmail.com</span>
              </span>
              <span>
                <b>User:</b> <span>havearound.user@gmail.com</span>
              </span>
              <i>Password for both is 'Password'.</i>
            </div>
          </div>
        ) : (
          <div className="modal-box">
            <DialogTitle className="signup-title">{"Signup"}
            </DialogTitle>
            <div className="signup-fields">
              <label>Name:</label>
              <input type="text"></input>
            </div>
            <div className="signup-fields">
              <label>Email:</label>
              <input type="email"></input>
            </div>
            <div className="signup-fields">
              <label>Mobile:</label>
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
            <div className="Btncss">
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
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}