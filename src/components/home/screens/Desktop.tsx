import { Box, IconButton, Link } from "@chakra-ui/react";
import { NextComponentType } from "next";
import Astronaut from "src/components/home/Astronaut";
import CrowdSaleTimer from "src/components/home/CrowdSaleTimer";
import Globe from "src/components/home/Globe";
import Image from "src/components/common/Image";
import Loader from "src/components/common/Loader";
import Menu from "src/components/common/Menu";
import Planet from "src/components/home/Planet";
import Satellite from "src/components/home/Satellite";
import Socials from "src/components/home/Socials";
import TradingWidget from "src/components/home/TradingWidget";
import { FcPicture } from "react-icons/fc";
import { VscColorMode } from "react-icons/vsc";

import useAppState, { ACTIONS } from "src/hooks/useAppState";
import useGrayScaleMode from "@hooks/useGrayScaleMode";

import bg from "public/images/bg-1600x900.jpg";
import { useAppSelector, useAppDispatch } from "@hooks";
// import Model from "../../../../utils/Model";
import Model2 from "../../../../utils/Model2";
import Astronaut3D from "../../../../utils/Astronaut3D";
import { url } from "inspector";
import PlayIntro from "../PlayIntro";
import MegaphoneIntro from "../MegaphoneIntro";
import NextLink from "next/link";
import Speaker from "../Speaker";
import Radio from "../Radio";
// import Ample from "../Ample";
import Vizsla from "../Vizsla";
import Header from "../Header/index";

const IMAGES_TO_LOAD = 2;

const Desktop: NextComponentType = () => {
  const [grayscaleMode, setGrayscaleMode] = useGrayScaleMode();
  const grayscaleMode1 = useAppSelector((state: any) => state.grayscale.value);

  const {
    state: { loadedImagesCount },
    dispatch,
  } = useAppState();
  // const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <>
      {/* {loadedImagesCount < IMAGES_TO_LOAD ? <Loader /> : ""} */}
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
          pointerEvents: "none",
          // backgroundImage:`url(${bg.src})`,
          backgroundColor: "#111133",
          backgroundSize: "cover",
        }}
        className={grayscaleMode1 === "gray" ? "App grayscale " : "App"}
      >
        <Box position="relative" height="100vh" width="100vw" overflow="hidden">
          <Menu />
          {/* <Astronaut /> */}
          <Box position="relative" w="100%" h="100%">
            {/* <Satellite /> */}
            {/* <Globe /> */}
          </Box>
          {/* <Planet /> */}

          <TradingWidget />
        </Box>
      </Box>
      {/* <IconButton
        w="50px"
        h="50px"
        right="40px"
        top="55px"
        position="fixed"
        zIndex="3000"
        aria-label="Toggle grayscale mode"
        borderRadius="full"
        // mx="10px"
        bg="gray.600"
        onClick={() => {
          setGrayscaleMode(grayscaleMode === "color" ? "gray" : "color");
        }}
        icon={
          grayscaleMode1 !== "color" ? (
            <FcPicture size="30px" />
          ) : (
            <VscColorMode size="30px" />
          )
        }
      /> */}
      <Header />
      <CrowdSaleTimer />
      {/* <Ample /> */}
      <Radio />
      {/* <Vizsla /> */}
      <PlayIntro />
      <MegaphoneIntro />
      <div className={grayscaleMode1 === "gray" ? "App grayscale " : "App"}>
        {/* <Model /> */}
        <Model2 />
      </div>
      <Speaker />
      <Socials />
    </>
  );
};

export default Desktop;
