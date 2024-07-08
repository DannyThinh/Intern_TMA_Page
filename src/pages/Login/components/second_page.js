import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import image1 from "assets/image/Page1_login.png";
import image2 from "assets/image/Page2_login.png";
import image3 from "assets/image/Page3_login.png";
import { FaMinus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const AnimatedContent = () => {
  const [selectedImage, setSelectedImage] = useState("image1");

  const images = useMemo(
    () => ({
      image1: image1,
      image2: image2,
      image3: image3,
    }),
    []
  );

  const icons = [
    <FaMinus size={35} />,
    <GoDotFill size={20} />,
    <GoDotFill size={20} />,
  ];

  const handleToggleChange = (event, newImage) => {
    if (newImage !== null) {
      setSelectedImage(newImage);
    }
  };

  // Change image every 3 seconds
  useEffect(() => {
    const imageKeys = Object.keys(images);
    const currentIndex = imageKeys.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % imageKeys.length;

    const interval = setInterval(() => {
      setSelectedImage(imageKeys[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedImage, images]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      className="second-page"
    >
      <img
        src={images[selectedImage]}
        alt="Selected"
        style={{ maxWidth: "100%", maxHeight: "50vh", marginBottom: "30px" }}
      />
      <Box width="80%" textAlign="center">
        <Typography className="title">Welcome to TMA Innovation</Typography>
        <Typography className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          blandit nisl.
        </Typography>
      </Box>
      <ToggleButtonGroup
        value={selectedImage}
        exclusive
        onChange={handleToggleChange}
        aria-label="image toggle buttons"
      >
        <ToggleButton
          value="image1"
          aria-label="image1"
          sx={{
            border: "none",
            backgroundColor: "#216CE3",
            color: "rgba(255, 255, 255, 0.3)",
            padding: "0",
            "&.Mui-selected": {
              backgroundColor: "#216CE3",
              color: "#ffffff",
            },
          }}
        >
          {icons[0]}
        </ToggleButton>
        <ToggleButton
          value="image2"
          aria-label="image2"
          sx={{
            border: "none",
            backgroundColor: "#216CE3",
            color: "rgba(255, 255, 255, 0.3)",
            padding: "0",
            paddingLeft: "16px",
            "&.Mui-selected": {
              backgroundColor: "#216CE3",
              color: "#ffffff",
            },
          }}
        >
          {icons[1]}
        </ToggleButton>
        <ToggleButton
          value="image3"
          aria-label="image3"
          sx={{
            border: "none",
            backgroundColor: "#216CE3",
            color: "rgba(255, 255, 255, 0.3)",
            padding: "0",
            paddingLeft: "16px",
            "&.Mui-selected": {
              backgroundColor: "#216CE3",
              color: "#ffffff",
            },
          }}
        >
          {icons[2]}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default AnimatedContent;
