import type { NextComponentType } from "next";
import { Box, keyframes } from "@chakra-ui/react";

import Image from "src/components/common/Image";

import astronautRight from "public/images/image_astronaut_06.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const astronautFly = keyframes`
  0% {
    content: url(/images/image_astronaut_06.png);
    transform: translate(0, 0px) scale(1);
    z-index: 1;
  }
  50% {
    transform: translate(1350px, -1050px) scale(0.53);
  }
  100% {
    content: url(/images/image_astronaut_07.png);
    transform: translate(-1300px, -700px) scale(0.71);
    z-index: 0;
  }
`;

const Astronaut: NextComponentType = () => {
  const astronautFlyAnimation = `${astronautFly} 86s linear 10s infinite`;
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box
    className={grayscaleMode === "gray" ? "grayscale" : ""}
      position="absolute"
      top="1100px"
      left="700px"
      height="200px"
      width="auto"
      animation={astronautFlyAnimation}
    >
      <Image
        className={grayscaleMode === "gray" ? "grayscale" : ""}
        src={astronautRight}
        alt="astronaut"
      />
    </Box>
  );
};

export default Astronaut;
