import type { NextComponentType } from "next";
import { Box, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import useIsMobile from "src/hooks/useIsMobile";

import Flicker from "src/components/common/Flicker";
// import Timer from "src/components/common/Timer";
import { useAppSelector, useAppDispatch } from "@hooks";
import NextLink from "next/link";

const CrowdSaleTimer: NextComponentType = () => {
  const isMobile = useIsMobile();
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const crowdSaleDate = new Date("2022-06-16T00:00:00.000+01:00");
  crowdSaleDate.toLocaleString('en-US', { timeZone: 'Europe/Berlin' });

  const tick = () => {
    const totalSecondsLeft = +new Date(+crowdSaleDate - +new Date()) / 1000;
    const seconds = Math.floor(totalSecondsLeft) % 60;
    const minutes = Math.floor(totalSecondsLeft / 60) % 60;
    const hours = Math.floor(totalSecondsLeft / (60 * 60)) % 24;
    const days = Math.floor(totalSecondsLeft / (60 * 60 * 24));

    setState({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 200);

    return () => {
      clearInterval(interval);
    };
  });
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box
      zIndex={120}
      className={grayscaleMode === "gray" ? "grayscale" : ""}
      position={{ sm: "relative", lg: "fixed" }}
      top={{ sm: "0px", lg: 20 }}
      right={{ sm: "0px", lg: 120 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      // justifyContent="flex-start"
      padding={{ sm: "13.5px", lg: 0 }}
      mt={{ sm: "0px", lg: "3rem" }}
      bg={{ sm: "rgba(255, 255, 255, 0.09)", lg: "transparent" }}
      borderRadius={{ sm: "15px", lg: 0 }}
      cursor="pointer"
    >
      <NextLink href="/">
        <Link isExternal style={{ textDecoration: "none" }}>
          {isMobile ? (
            <Text
              fontFamily="'Changa'"
              fontSize="40px"
              fontWeight="500"
              lineHeight="40px"
              color="white"
              mb="20px"
            >
              BUY $BABY
            </Text>
          ) : (
            <Flicker text="BUY $BABY" />
          )}
          {/* <Timer isMobile={isMobile} {...state} /> */}
        </Link>
      </NextLink >
    </Box>
  );
};

export default CrowdSaleTimer;
