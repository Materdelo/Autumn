import { Box } from "@mui/material";
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
  const dickRef = useRef(null);
  const [clientHeight, setClientHeight] = useState(0);

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
  ];

  const randomBetween = (min, max) => Math.random() * (max - min) + min;

  useEffect(() => {
    console.log(dickRef.current?.height);
    setClientHeight(dickRef.current?.height || 0);
  }, [dickRef.current.height]);

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
        ref={dickRef}
        component="img"
        src={tree}
        alt="tree"
        sx={{
          height: { xs: "auto", lg: "100%" },
          width: { xs: "100%", lg: "auto" },
        }}
      />
      {clientHeight > 0 && (
        <Box className="leaves">
          {leaves.map((leaf, index) => (
            <motion.img
              key={index}
              src={leaf}
              alt="Leaf"
              className="leaf"
              initial={{
                x: randomBetween(-300, 300),
                y: 10,
                rotate: randomBetween(0, 360),
              }}
              animate={{
                x: randomBetween(-300, 300),
                y: clientHeight,
                rotate: randomBetween(360, 720),
              }}
              transition={{
                duration: randomBetween(3, 6),
                repeat: Infinity,
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
