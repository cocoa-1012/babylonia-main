import { Box, Button, Flex, HStack, IconButton } from "@chakra-ui/react";
import type { NextComponentType, NextPageContext } from "next";

import Image from "./Image";

import logo from "public/images/logo/Logo.png";
import { useAppSelector, useAppDispatch } from "@hooks";
import { FcPicture } from "react-icons/fc";
import { VscColorMode } from "react-icons/vsc";
import useGrayScaleMode from "@hooks/useGrayScaleMode";

type TProps = {
  handleMenuClick: () => void;
};

const Header: NextComponentType<NextPageContext, {}, TProps> = ({
  handleMenuClick,
}) => {
  const burgerStyle = {
    left: "50%",
    w: "60%",
    h: "3px",
    bg: "white",
    borderRadius: "10px",
    transform: "translateX(-50%)",
  };
  const [grayscaleMode, setGrayscaleMode] = useGrayScaleMode();
  const grayscaleMode1 = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      bg="brand.100"
      padding="10px"
      zIndex={20}
    >
      <Flex alignItems="center">
        <Button
          as="a"
          href="/"
          height={83}
          width={83}
          maxWidth="60%"
          bg="transparent"
          padding={0}
        >
          <Image
            className={grayscaleMode === "gray" ? "grayscale" : ""}
            src={logo}
            alt="logo"
            objectFit="fill"
          />
        </Button>

        <IconButton
          // ml="15px"
          // align="right"
          w="47px"
          h="47px"
          top="50%"
          // left={["","","","390px"]}
          right="90px"
          // top="40px"
          // position="fixed"
          position="absolute"
          padding="10px"
          zIndex="3000"
          aria-label="Toggle grayscale mode"
          borderRadius="full"
          transform="translateY(-50%)"
          _hover={{
            background: "transparent",
          }}
          // mx="10px"

          onClick={() => {
            setGrayscaleMode(grayscaleMode1 === "color" ? "gray" : "color");
          }}
          icon={
            grayscaleMode1 !== "color" ? (
              <FcPicture size="30px" />
            ) : (
              <VscColorMode size="30px" />
            )
          }
        />
        <Button
          position="absolute"
          right="30px"
          top="50%"
          w="47px"
          h="47px"
          bg="transparent"
          padding="10px"
          transform="translateY(-50%)"
          _hover={{
            background: "transparent",
          }}
          onClick={handleMenuClick}
        >
          <Box as="span" position="absolute" top="13px" {...burgerStyle} />
          <Box as="span" position="absolute" {...burgerStyle} />
          <Box as="span" position="absolute" bottom="13px" {...burgerStyle} />
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
