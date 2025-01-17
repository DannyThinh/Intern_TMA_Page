import { Grid, Paper, useMediaQuery } from "@mui/material";

import LoginForm from "./components/loginForm";
import React from "react";
import SliderPage from "./components/sliderHoldPage";

export default function Login() {
  const isBelow900 = useMediaQuery("(max-width:900px)");
  const isBelow1300 = useMediaQuery("(max-width:1300px)");

  return (
    <Grid
      container
      style={{
        minHeight: "100vh",
        backgroundColor: "#1c2636",
      }}
    >
      {/* Login Box (Responsive) */}
      <Grid
        item
        xs={12}
        md={isBelow1300 ? 6 : 5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ padding: "20px" }}
      >
        <Paper
          style={{
            padding: "40px",
            borderRadius: "32px",
            background: "#232f43",
            width: "60%",
          }}
        >
          <LoginForm />
        </Paper>
      </Grid>
      {/* Animated Content (Responsive) */}
      {!isBelow900 && (
        <Grid
          item
          xs={12}
          md={isBelow1300 ? 6 : 7}
          style={{
            background: "#216CE3",
            position: "relative",
            padding: "20px",
            borderRadius: "120px 0 0 120px",
          }}
        >
          <SliderPage />
        </Grid>
      )}
    </Grid>
  );
}
