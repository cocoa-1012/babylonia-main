import type { NextComponentType } from "next";
import { Box, keyframes } from "@chakra-ui/react";

import Image from "src/components/common/Image";

import useAppState, { ACTIONS } from "src/hooks/useAppState";

import globe from "public/images/image_globe_010.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const etPbRoll = keyframes`
  0% {
    transform-origin: center;
  }
  100% {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
`;

const Globe: NextComponentType = () => {
  const { dispatch } = useAppState();
  const etPbRollAnimation = `${etPbRoll} 590s linear 8s infinite`;
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box
      position="fixed"
      top="50%"
      right="50%"
      height="650px"
      width="800px"
      transform="translate(35%, -45%)"
      overflow="visible"
    >
      <Box
        animation={etPbRollAnimation}
        transform="rotateZ(360deg)"
        width="100%"
        height="100%"
      >
        <Image
          className={grayscaleMode === "gray" ? "grayscale" : ""}
          priority
          layout="fill"
          src={globe}
          alt="globe"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default Globe;
