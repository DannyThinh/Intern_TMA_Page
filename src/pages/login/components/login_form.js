import "../index.css";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Email, Https } from "@mui/icons-material";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LangueButton from "./langue_button";
import TMAImage from "assets/image/TMA.png";
import { loginAccount } from "app/authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [langue, setLangue] = useState("en");

  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);
  const navigate = useNavigate();
  const handleOptionChange = (event, newOption) => {
    if (newOption !== null) {
      setLangue(newOption);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resultAction = await dispatch(
      loginAccount({ username: email, password })
    );
    if (loginAccount.fulfilled.match(resultAction)) {
      navigate("/home", { state: { user: resultAction.payload } });
    }
  };

  return (
    <Box textAlign="start" className="login-form">
      <Box textAlign="center">
        <img
          src={TMAImage}
          alt="TMA Solution"
          style={{ height: "60px", width: "auto", marginBottom: "56px" }}
        />
      </Box>
      <Typography className="h5" marginBottom="24px">
        Log In
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Typography className="subtitle1">Email</Typography>
          <TextField
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email className="place-holder-icon" />
                </InputAdornment>
              ),
              className: "place-holder-text",
              inputProps: {
                style: {
                  height: "28px",
                },
              },
            }}
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var( --boder-textfield-color)",
                },
                "&:hover fieldset": {
                  borderColor: "var( --boder-textfield-color)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var( --boder-textfield-color)",
                },
              },
            }}
          />
          <Typography
            variant="subtitle1"
            className="subtitle1"
            style={{ marginTop: "16px" }}
          >
            Password
          </Typography>
          <TextField
            required
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Https className="place-holder-icon" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {!showPassword ? (
                      <PiEyeClosedBold style={{ color: "white" }} />
                    ) : (
                      <PiEyeBold style={{ color: "white" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
              className: "place-holder-text",
              inputProps: {
                style: {
                  fontSize: showPassword || !password ? "16px" : "30px",
                  letterSpacing: showPassword || !password ? "normal" : "8px",
                  height: "28px",
                },
              },
            }}
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var( --boder-textfield-color)",
                },
                "&:hover fieldset": {
                  borderColor: "var( --boder-textfield-color)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var( --boder-textfield-color)",
                },
              },
            }}
          />
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%", marginTop: "16px" }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: "var(--primary-color)",
                    },
                    "&.MuiCheckbox-root": {
                      borderRadius: 0,
                      padding: 0,
                      marginRight: 1,
                    },
                    "&.Mui-checked": {
                      backgroundColor: "white",
                    },
                    "& svg": {
                      scale: "1.5",
                    },
                  }}
                />
              }
              label="Remember me"
              style={{
                color: "#EFEFEF",
                fontSize: "var(--default-font-size)",
                fontWeight: 400,
                width: "fit-content",
              }}
            />
            <Button variant="text" className="primary-button">
              Forget password?
            </Button>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            className="log-in-button"
            fullWidth
            style={{ marginTop: "24px" }}
            disabled={authStatus === "loading"}
          >
            {authStatus === "loading" ? "Logging in..." : "Log In"}
          </Button>
          {authStatus === "failed" && (
            <Typography color="error" style={{ marginTop: "16px" }}>
              {authError}
            </Typography>
          )}
          <Stack
            direction="row"
            style={{ marginTop: "24px" }}
            alignItems="center"
          >
            <Typography className="sign-up-text">
              Don’t have an account yet?
            </Typography>
            <Button
              variant="text"
              className="primary-button"
              style={{ marginLeft: "8px" }}
            >
              Sign up
            </Button>
          </Stack>
          <Box display={"flex"} justifyContent="center" marginTop="28px">
            <LangueButton value={langue} onChange={handleOptionChange} />
          </Box>
        </FormGroup>
      </Box>
    </Box>
  );
}
