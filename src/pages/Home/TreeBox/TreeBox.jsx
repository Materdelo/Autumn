import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

import tree from "../../../assets/tree.png";
import image_1 from "../../../assets/listki/1.png";
import image_2 from "../../../assets/listki/2.png";
import image_3 from "../../../assets/listki/3.png";
import image_4 from "../../../assets/listki/4.png";
import image_5 from "../../../assets/listki/5.png";
import image_6 from "../../../assets/listki/6.png";
import image_7 from "../../../assets/listki/7.png";
import image_8 from "../../../assets/listki/8.png";
import image_9 from "../../../assets/listki/9.png";
import { useEffect, useRef, useState } from "react";

export default function TreeBox() {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.only("md"));
  const isSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const isExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));

  const leaves = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
  ];

  const randomBetween = (min, max) => Math.random() * (max - min) + min;

  return (
    <Box
      sx={{
        flex: 1,
        pt: 2.5,
        width: "100%",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={tree}
        alt="tree"
        sx={{
          height: { xs: "400px", sm: "600px", md: "800px", lg: "100%" },
          width: { xs: "auto", lg: "auto" },
          zIndex: 3,
        }}
      />
      <Box className="leaves">
        {leaves.map((leaf, index) => (
          <motion.img
            key={index}
            src={leaf}
            alt="Leaf"
            className="leaf"
            initial={{
              x: randomBetween(
                -(isSmall ? 200 : isExtraSmall ? 150 : 300),
                isSmall ? 200 : isExtraSmall ? 150 : 300,
              ),
              y: isMedium ? 500 : isSmall ? 400 : isExtraSmall ? 250 : 420,
              rotate: randomBetween(0, 360),
            }}
            animate={{
              x: randomBetween(
                -(isSmall ? 200 : isExtraSmall ? 150 : 300),
                isSmall ? 200 : isExtraSmall ? 150 : 300,
              ),
              y: isMedium ? 700 : isSmall ? 540 : isExtraSmall ? 350 : 550,
              rotate: randomBetween(360, 720),
            }}
            transition={{
              duration: randomBetween(3, 6),
              repeat: Infinity,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
