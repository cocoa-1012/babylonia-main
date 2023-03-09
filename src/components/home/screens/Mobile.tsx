import type { NextComponentType } from "next";
import { useState } from "react";
import { Box, IconButton, Text } from "@chakra-ui/react";

import CrowdSaleTimer from "src/components/home/CrowdSaleTimer";
import Flicker from "src/components/common/Flicker";
import Header from "src/components/common/Header";
import MobileMenu from "src/components/common/Menu/MobileMenu";
import Socials from "src/components/home/Socials";
import { useAppSelector, useAppDispatch } from "@hooks";
import { FcPicture } from "react-icons/fc";
import { VscColorMode } from "react-icons/vsc";
import useGrayScaleMode from "@hooks/useGrayScaleMode";

const Mobile: NextComponentType = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((state) => !state);
  };
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  return (
    <Box
      position="relative"
      bg={grayscaleMode === "gray" ? "gray.900" : "brand.300"}
      minH="100vh"
      padding="103px 0 150px"
    >
      <Header handleMenuClick={handleMenuClick} />

      <Box
        padding="0 18px"
        // className={grayscaleMode === "gray" ? "grayscale" : ""}
      >
        <MobileMenu isOpen={isOpen} />
        <Flicker text="Coming soon" />
        <Text
          fontFamily="'Changa'"
          fontSize="17px"
          fontWeight="500"
          p="20px 10px"
          color="white"
          textAlign="center"
        >
          The mobile version of babylonia.app is under construction, please
          visit the desktop version.
        </Text>
        <CrowdSaleTimer />
        <Socials />
      </Box>
    </Box>
  );
};

export default Mobile;
