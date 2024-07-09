import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaMinus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import image1 from "assets/image/Page1_login.png";
import image2 from "assets/image/Page2_login.png";
import image3 from "assets/image/Page3_login.png";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

const SliderPage = () => {
  const images = useMemo(
    () => ({
      image1: image1,
      image2: image2,
      image3: image3,
    }),
    []
  );

  const icons = [
    <FaMinus
      size={35}
      color="
    #FFFFFF"
    />,
    <GoDotFill size={20} color="rgba(255, 255, 255, 0.3)" />,
    <GoDotFill size={20} color="rgba(255, 255, 255, 0.3)" />,
  ];

  const slides = [
    { image: images.image1, icon: icons[0] },
    { image: images.image2, icon: icons[1] },
    { image: images.image3, icon: icons[2] },
  ];

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="second-page"
    >
      <Swiper
        pagination={{
          clickable: false,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "50vh",
                marginBottom: "30px",
              }}
            />
            <Box width="80%">
              <Typography className="title">
                Welcome to TMA Innovation
              </Typography>
              <Typography className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget blandit nisl.
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
            >
              {icons.map((icon, idx) => (
                <Box key={idx} mr={2}>
                  {icon}
                </Box>
              ))}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SliderPage;
