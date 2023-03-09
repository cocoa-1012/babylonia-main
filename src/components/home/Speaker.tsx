import { Box } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import Image from "next/image";
import useAppState, { ACTIONS } from "src/hooks/useAppState";
import { useAppSelector, useAppDispatch } from "@hooks";
import { Heading } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
const Speaker: NextComponentType = () => {
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

    return () => { };
  }, [audioDom, playPause]);
  const IsplayMusic = () => {
    setPlayPause(!playPause);
  };

  return (
    <Box position="fixed" top={450} right={-111} width={400}>
      <Box width={"130px"} style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '227px',
        alignItems: 'center',

      }}>
        <Heading className="nftheading" as='h4' size='4xl' noOfLines={1}>
          NFT
        </Heading>
        <Image
          onClick={IsplayMusic}
          className={grayscaleMode === "gray" ? "grayscale speakerTextGrey cursoor" : "cursoor"}
          alt="speaker"
          onLoad={() => dispatch({ type: ACTIONS.INCREMENT_LOADED_IMAGES })}
          src="/images/SVG/BABYLONI.svg"
          id="face"
          width={"120px"}
          height="120px"

        />
      </Box>

      <Box
        fontSize={"24px"}
        color={"#E2E2E2"}
        cursor="pointer"
      >
        <Heading className="mintNowHeading" as='h4' size='4xl' noOfLines={1}>
          <Link className={grayscaleMode === "gray" ? "grayscale speakerTextGrey" : ""} href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/81492926046803619813593848659185281948886014769056725945648963288680632427088/' isExternal style={{ textDecoration: 'none' }}>
            Mint Now!
          </Link>
        </Heading>
      </Box>

      <audio
        ref={(element) => setAdudioDom(element)}
        src="/sound_NFT Voiceover_mixdown.mp3"
      ></audio>
    </Box>
  );
};

export default Speaker;
