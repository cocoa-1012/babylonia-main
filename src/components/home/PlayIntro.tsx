import { Box } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import Image from "next/image";
import useAppState, { ACTIONS } from "src/hooks/useAppState";
import { useAppSelector, useAppDispatch } from "@hooks";
const PlayIntro: NextComponentType = () => {
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
    <Box position="fixed" top={225} right={85} zIndex={999}>
      <Box width={"130px"} cursor={`true`} onClick={IsplayMusic}>
        <Image
          className={grayscaleMode === "gray" ? "grayscale cursoor" : "cursoor"}
          alt="speaker"
          onLoad={() => dispatch({ type: ACTIONS.INCREMENT_LOADED_IMAGES })}
          src="/speaker-02.svg"
          id="face"
          width={"98px"}
          height="98px"
          z-index={`999`}
        />
      </Box>

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
      </Box>

      <audio
        ref={(element) => setAdudioDom(element)}
        src="/playIntro.mp3"
      ></audio>
    </Box>
  );
};

export default PlayIntro;
