import React from "react";
import { Grid, Paper } from "@mui/material";
import LoginForm from "./components/login_form";
import AnimatedContent from "./components/second_page";

export default function Login() {
  return (
    <Grid
      container
      style={{
        minHeight: "100vh",
        backgroundColor: "#1c2636",
      }}
    >
      {/* Login Box (5 columns) */}
      <Grid
        item
        xs={12}
        md={5}
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
      {/* Animated Content (7 columns) */}
      <Grid
        item
        xs={12}
        md={7}
        style={{
          background: "#216CE3",
          position: "relative",
          padding: "20px",
          borderRadius: "120px 0 0 120px",
        }}
      >
        <AnimatedContent />
      </Grid>
    </Grid>
  );
}
