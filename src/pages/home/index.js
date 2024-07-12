// Home.js

import { Box, Typography } from "@mui/material";

import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <Box>
      <Typography variant="h3">Welcome Home</Typography>
      {user && (
        <Box>
          <Typography variant="h5">Token:</Typography>
          <Typography variant="subtitle1">{user.token}</Typography>
          <Typography variant="h5">Refresh Token:</Typography>
          <Typography variant="subtitle1">{user.refreshToken}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Home;
