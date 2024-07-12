// ChoiceButton.js

import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

import React from "react";
import enFlag from "assets/image/EN.png";
import viFlag from "assets/image/VN.png";

const LangueButton = ({ value, onChange }) => {
  return (
    <Box display="flex" justifyContent="center">
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={onChange}
        aria-label="language selection"
        sx={{
          color: "#808080",
          backgroundColor: "#ADC9F5",
          borderRadius: "8px",
          padding: "4px",
        }}
      >
        <ToggleButton
          value="vi"
          aria-label="Vietnamese"
          sx={{
            border: "none",
            "&.Mui-selected": {
              backgroundColor: "#77A5EE",
              color: "#ffffff",
              borderRadius: "8px",
              padding: "4px 8px 4px 8px",
            },
          }}
        >
          <img
            src={viFlag}
            alt="Vietnamese Flag"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          VIE
        </ToggleButton>
        <ToggleButton
          value="en"
          aria-label="English"
          sx={{
            border: "none",
            "&.Mui-selected": {
              backgroundColor: "#77A5EE",
              color: "#ffffff",
              borderRadius: "8px",
              padding: "4px 8px 4px 8px",
            },
          }}
        >
          <img
            src={enFlag}
            alt="English Flag"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          ENG
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default LangueButton;
