import { NextComponentType } from "next";

import Image from "src/components/common/Image";
import { Box } from "@chakra-ui/react";
import tokenomics from "public/images/slides/SLIDES_TOKEN_12_1x1_withTitle.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const Tokenomics: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  return (
    <Box height="calc(100vh - 160px)" position="relative">
      <Image
        className={grayscaleMode === "gray" ? "grayscale" : ""}
        src={tokenomics}
        layout="fill"
        objectFit="contain"
        alt="betting"
      />
    </Box>
  );
};

export default Tokenomics;
