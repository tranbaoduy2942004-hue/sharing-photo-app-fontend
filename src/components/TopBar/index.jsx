import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const { userId } = useParams() || {};
  let rightText = "";

  // Xác định ngữ cảnh hiển thị bên phải TopBar
  if (location.pathname === "/users") {
    rightText = "User List";
  } else if (
    location.pathname.startsWith("/users/") &&
    !location.pathname.startsWith("/photos/")
  ) {
    const user = models.userModel(userId);
    if (user) rightText = `${user.first_name} ${user.last_name}`;
  } else if (location.pathname.startsWith("/photos/")) {
    const user = models.userModel(userId);
    if (user) rightText = `Photos of ${user.first_name} ${user.last_name}`;
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Bên trái: tên bạn */}
        <Typography variant="h5" color="inherit">
          Trần Bảo Duy
        </Typography>

        {/* Bên phải: hiển thị ngữ cảnh */}
        <Typography variant="h6" color="inherit">
          {rightText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
