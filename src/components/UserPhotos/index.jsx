import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models.js";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  const photos = models.photoOfUserModel(userId);

  if (!user) {
    return <Typography variant="body1">User not found!!</Typography>;
  }

  if (!photos || photos.length === 0) {
    return (
      <Typography variant="body1">
        No photos available for this user.
      </Typography>
    );
  }

  // Chưa render ra được ảnh,

  return (
    <>
      <Typography variant="h5">
        Photos of User: {user.first_name} {user.last_name}
      </Typography>

      {photos.map((photo) => (
        <div key={photo._id} style={{ marginBottom: "20px" }}>
          <img
            src={`/images/${photo.file_name}`} // Đường dẫn cần khớp với folder chứa ảnh
            alt={photo.file_name}
            style={{ maxWidth: "300px", display: "block" }}
          />
          <Typography variant="body2">Date: {photo.date_time}</Typography>
        </div>
      ))}
    </>
  );
}

export default UserPhotos;
