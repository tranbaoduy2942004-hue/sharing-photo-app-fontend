import { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";

import "./styles.css";
import { useParams, useNavigate } from "react-router-dom";
import models from "../../modelData/models.js";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  const navigate = useNavigate();

  if (!user) {
    return <Typography variant="body1">Loading user information...</Typography>;
  }

  const handleViewImages = (user) => {
    // Dùng backtick cho template string
    navigate(`/photos/${user._id}`);
  };

  return (
    <>
      <Typography variant="h5">User Detail</Typography>
      <Typography>
        <strong>Name:</strong> {user.first_name} {user.last_name}
      </Typography>
      <Typography>
        <strong>Location:</strong> {user.location}
      </Typography>
      <Typography>
        <strong>Occupation:</strong> {user.occupation}
      </Typography>
      <Typography>
        <strong>Description:</strong> {user.description}
      </Typography>
      <Button onClick={() => handleViewImages(user)}>View images</Button>
    </>
  );
}

export default UserDetail;
