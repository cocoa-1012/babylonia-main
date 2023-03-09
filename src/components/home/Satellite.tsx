import type { NextComponentType } from "next";
import { Box, keyframes } from "@chakra-ui/react";

import Image from "src/components/common/Image";
import satellite from "public/images/image_satellite_003_500px.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const orbit = keyframes`
  0% {
    transform: translate(-60%, -40%) rotateZ(0deg);
  }
  100% {
    transform: translate(-60%, -40%) rotateZ(-360deg);
  }
`;

const Satellite: NextComponentType = () => {
  const orbitAnimation = `${orbit} 64s linear infinite`;
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box position="relative" w="100%" h="100%">
      <Box position="absolute" h="100%" w="100%">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          w="1000px"
          h="600px"
          transform="translate(-60%, -40%)"
          animation={orbitAnimation}
        >
          <Box
            position="absolute"
            top="50%"
            left="100%"
            w="150px"
            h="150px"
            transform="translate(-50%, -50%) rotateY(180deg) rotateZ(-46deg)"
          >
            <Image
              className={grayscaleMode === "gray" ? "grayscale" : ""}
              src={satellite}
              alt="satellite"
              layout="fill"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Satellite;
