import { Box } from "@chakra-ui/react";
import { useAppSelector } from "@hooks";
import type { NextComponentType } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import useAppState, { ACTIONS } from "src/hooks/useAppState";
const MegaphoneIntro: NextComponentType = () => {
  const { dispatch } = useAppState();
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  const [playPause, setPlayPause] = useState(false);
  const [audioDom, setAdudioDom] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioDom && playPause === true) {
      audioDom.play();
    }
    if (audioDom && playPause === false) {
      audioDom.pause();
    }

    return () => {};
  }, [audioDom, playPause]);
  const IsplayMusic = () => {
    setPlayPause(!playPause);
  };

  return (
    <Box position="fixed" top={28} right={310} zIndex={120}>
      <Box width={"130px"} onClick={IsplayMusic}>
        <Image
          className={grayscaleMode === "gray" ? "grayscale" : ""}
          alt="speaker"
          onLoad={() => dispatch({ type: ACTIONS.INCREMENT_LOADED_IMAGES })}
          src="/megaphone-02.svg"
          id="megaphone"
          width={"96px"}
          height="86.6px"
        />
      </Box>
      {/* 
      <Box
        onClick={IsplayMusic}
        fontSize={"24px"}
        color={"#E2E2E2"}
        cursor="pointer"
      >
        {playPause === false ? (
          <Typewriter
            options={{
              strings: ["Play intro...", "Play intro..."],
              autoStart: true,
              loop: true,
            }}
          />
        ) : (
          <Typewriter
            options={{
              strings: ["Pause intro.", "Pause intro."],
              autoStart: true,
              loop: true,
            }}
          />
        )}
      </Box> */}

      <audio
        ref={(element) => setAdudioDom(element)}
        src="/CrowdsaleBabylonia-201.mp3"
      ></audio>
    </Box>
  );
};

export default MegaphoneIntro;
