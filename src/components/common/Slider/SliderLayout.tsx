import Draggable from "react-draggable";
import { useRef } from "react";
import { Box, Button, Text, useOutsideClick } from "@chakra-ui/react";
import type { NextComponentType, NextPageContext } from "next";

import Image from "src/components/common/Image";

import closeIcon from "public/images/icons/general/icon_close_32x32.png";
import { useAppSelector, useAppDispatch } from "@hooks";

type TProps = {
  title: string;
  href?: string | null;
  width?: string;
  height?: string;
  top?: string;
  zIndex?: string;
  onClose: () => void;
};

const SliderLayout: NextComponentType<NextPageContext, {}, TProps> = ({
  children,
  title,
  href,
  width,
  height,
  top,
  zIndex="100000",
  onClose,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  useOutsideClick({
    handler: onClose,
    ref,
  });

  return (
    <Draggable>
      <Box
        className={grayscaleMode === "gray" ? "grayscale" : ""}
        ref={ref}
        position="fixed"
        left="300px"
        top={top !== "" ? top : "50px"}
        bg="brand.300"
        border="2px solid #686868"
        borderRadius="15px"
        boxShadow="0px 2px 33px 0px rgb(255 255 255 / 40%)"
        width={width !== "" ? width : 960}
        maxW={width !== "" ? width : 960}

        overflow="hidden"
        zIndex={66001}
        pointerEvents="all"
        height={height}
      >
        <Box
          position="relative"
          textAlign="center"
          bg="brand.100"
          cursor="move"
        >
          <Text
            fontFamily="'Press Start 2P'"
            fontSize="38px"
            lineHeight="50px"
            textTransform="uppercase"
            color="rgba(255,255,255,0.42)"
          >
            {title}
          </Text>
          <Button
            position="absolute"
            top="50%"
            right="5px"
            height="32px"
            width="32px"
            bg="transparent"
            transform="translateY(-50%)"
            _hover={{
              bg: "transparent",
            }}
            onClick={onClose}
          >
            <Image
              className={grayscaleMode === "gray" ? "grayscale" : ""}
              src={closeIcon}
              layout="fill"
              alt="close"
            />
          </Button>
        </Box>
        <Box maxH="calc(100vh - 160px)" minH="300px" overflowY="scroll">
          {children}
          {href && (
            <Button
              as="a"
              variant="link"
              href={href}
              target="_blank"
              position="absolute"
              fontFamily="'Press Start 2P'"
              fontSize="20px"
              fontWeight="500"
              bottom="10px"
              left="50%"
              color="black"
              padding="12px 20px"
              background="rgba(224,153,0,0.52)"
              transform="translateX(-50%)"
            >
              More
            </Button>
          )}
        </Box>
      </Box>
    </Draggable>
  );
};

export default SliderLayout;
