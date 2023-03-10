import { NextComponentType } from "next";

import Image from "src/components/common/Image";
import { Box } from "@chakra-ui/react";

import win from "public/images/slides/Win.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const Win: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  return (
    <Box height="calc(100vh - 160px)" position="relative">
      <Image
        className={grayscaleMode === "gray" ? "grayscale" : ""}
        src={win}
        layout="fill"
        objectFit="contain"
        alt="win"
      />
    </Box>
  );
};

export default Win;
