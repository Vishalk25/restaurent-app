import React, { useState,useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { FoodContext } from "../Context/FoodContextProvider";
import {LoginContext} from "../Context/LoginContextProvider";
import "./NavMenu.css";
import "./Navbar.css";
import LoginPage from "../pages/Login";

export const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 150,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: "green",
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useContext(LoginContext);
  const open = Boolean(anchorEl);
    const { cart } = useContext(FoodContext);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
    logout();
    handleClose();
  }

  return (
    <div id="customized-menus">
      <Link to="/cart" className="menu2">
                <div className="cartContainer" style={{ display: "flex", alignItems: "center", width: "fit-content",gap:"5px" }}>
                  <p id="cartTotalItems" style={{left:"14px"}}>{cart.length}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" stroke="black" strokeWidth={"0.4"} />
                  </svg>
                </div>
              </Link>
      <Button
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        color="warning"
        disableElevation
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        slotProps={{
          list: {
            "aria-labelledby": "demo-customized-button",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link to="/" className="custom-menu">
          <MenuItem onClick={handleClose} disableRipple>
            Home
          </MenuItem>
        </Link>
        <Link to="/menu/pasta" className="custom-menu">
          <MenuItem onClick={handleClose} disableRipple>
            Special
          </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        <Link to="/offers" className="custom-menu">
          <MenuItem onClick={handleClose} disableRipple>
            Offer
          </MenuItem>
        </Link>
        {!user ? <MenuItem onClick={handleClose} disableRipple>
        <span
        id="login-btn"
        sx={{
          p: 0,
          ml: -1,
          color: "rgb(29, 28, 28)",
          fontSize: "16px",
          fontWeight: 600,
          textTransform: "none",
          opacity: 0.8,
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={handleOpen}
        variant="text"
      >
        Login
      </span>
          <LoginPage open={open} handleClose={handleClose} />
        </MenuItem>
        :<MenuItem onClick={handleLogout} disableRipple>
          Logout
        </MenuItem>}
      </StyledMenu>
    </div>
  );
}
