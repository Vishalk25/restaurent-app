import React, { useContext } from "react";
import { Button } from "@mui/material";
import { StyledMenu } from "./NavMenu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { LoginContext } from "../Context/LoginContextProvider";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Profile = () => {
    const { user, logout } = useContext(LoginContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handlelogout = () => {
        console.log("logging out user", user);
        logout();
        handleClose();
    };

    return (
        <div>
            <Button
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="text"
                color="inherit"
                onClick={handleClick}
                sx={{ minWidth: "fit-content", ":hover": { backgroundColor: "transparent", marginTop: "-4px" } }}
            >
                <AccountCircleOutlinedIcon shapeRendering="crispEdges" sx={{ color: "inherit", fontSize: "31px" }} />
            </Button>
            <StyledMenu
                id="customized-menu"
                slotProps={{
                    list: {
                        "aria-labelledby": "demo-customized-button",
                    },
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem style={{ pointerEvents: "none", fontWeight: "bold" }} disableRipple>
                    {user ? user.username : "Profile"}
                </MenuItem>
                <MenuItem onClick={handlelogout} disableRipple>
                   { "Logout"}
                </MenuItem>
            </StyledMenu>
        </div>
    )
}

export default Profile