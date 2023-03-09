import { Box, keyframes, Text } from "@chakra-ui/react";
import type { NextComponentType, NextPageContext } from "next";

import useIsMobile from "src/hooks/useIsMobile";
import { useAppSelector, useAppDispatch } from "@hooks";

export type TProps = {
  text: string;
};

const flicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff, 0 0 2rem var(--neon-text-color), 0 0 4rem var(--neon-text-color), 0 0 6rem var(--neon-text-color), 0 0 8rem var(--neon-text-color), 0 0 10rem var(--neon-text-color);
    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 2rem var(--neon-border-color), inset 0 0 2rem var(--neon-border-color), 0 0 4rem var(--neon-border-color), inset 0 0 4rem var(--neon-border-color); }

  20%, 24%, 55% {
    text-shadow: none;
    box-shadow: none; }
`;

const mobileFlicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    color: #fff;
    text-shadow: -0.1rem -0.2rem 1.3rem #b82c2c, 1.1rem 1.1rem 2.5rem var(--neon-mobile-text-color), 0 0 1.2rem var(--neon-mobile-text-color), 0 0 0.2rem var(--neon-mobile-text-color), 0 0 0.1rem var(--neon-mobile-text-color), 0 0 0.2rem #fff, 0 0 4.1rem var(--neon-mobile-text-color);
    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 2rem var(--neon-border-color), inset 0 0 1rem var(--neon-border-color), 0 0 2rem var(--neon-border-color), inset 0 0 2rem var(--neon-border-color);
  }
  20%, 24%, 55% {
    text-shadow: none;
    box-shadow: none;
  }
`;

const Flicker: NextComponentType<NextPageContext, {}, TProps> = ({ text }) => {
  const isMobile = useIsMobile();
  const flickerAnimation = `${
    isMobile ? mobileFlicker : flicker
  } 1.5s infinite alternate`;
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box className={grayscaleMode === "gray" ? "grayscale" : ""}>
      <Text
        animation={flickerAnimation}
        // as="h4"
        fontSize={{ sm: "43px", lg: "1.9rem" }}
        fontWeight={{ sm: "500", lg: "100" }}
        fontStyle="italic"
        fontFamily={{
          sm: "'Ropa Sans','neon',Helvetica,Arial,Lucida,sans-serif;",
          lg: "'Press Start 2P'",
        }}
        lineHeight={["3rem","3rem","1rem","1rem"]}
        color="#fff"
        padding={{ sm: "10px 5px", lg: "2.5rem 2rem 2.5rem" }}
        border="0.2rem solid #fff"
        borderRadius={{ sm: "15px", lg: "2rem" }}
        textAlign="center"
        textTransform="uppercase"
        margin={{ sm: "0 5px", lg: "0" }}
        mb={{ sm: "5px", lg: "3px" }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default Flicker;
