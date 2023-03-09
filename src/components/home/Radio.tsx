import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { useAppSelector } from "@hooks";
import type { NextComponentType } from "next";
import Image from "next/image";
import { useState } from "react";
import useAppState, { ACTIONS } from "src/hooks/useAppState";
const Radio: NextComponentType = () => {
  const { dispatch } = useAppState();
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  const [playPause, setPlayPause] = useState(false);

  const IsplayMusic = () => {
    setPlayPause(!playPause);
  };

  return (
    <Box position="fixed" top={265} right={445} zIndex={999}>
      <Flex alignItems={`center`} flexDirection={`column`}>
      <Box width={"130px"}>
        <Link href={`https://pancakeswap.finance/swap?outputCurrency=0xe6dFa7118961851d62297Eb7bBe453364D880Ba5`} isExternal>
        <Image
         className={grayscaleMode === "gray" ? "grayscale speakerTextGrey cursoor" : "cursoor"}
          alt="speaker"
          onLoad={() => dispatch({ type: ACTIONS.INCREMENT_LOADED_IMAGES })}
          src="/images/SVG/pancakeswap-cake-logo.svg"
          id="face"
          width={"98px"}
          height="98px"
          z-index={`993`}
        />
        </Link>
        <Box position="fixed" top={220} right={410} zIndex={999}>
        <Image
         className={grayscaleMode === "gray" ? "grayscale speakerTextGrey " : " "}
          alt="speaker"
          onLoad={() => dispatch({ type: ACTIONS.INCREMENT_LOADED_IMAGES })}
          src="/images/SVG/arrow45deg.svg"
          width={"65px"}
          height="50px"
          z-index={`993`}
          
        />
        </Box>
      </Box>

      <Link
        fontSize={"24px"}
        color={"#E2E2E2"}
        cursor="pointer"
        isExternal
        href={`https://app.radioshack.org/swap`}
        style={{ textDecoration: 'none' }}
      >
        <Heading className="mintNowHeading3" size="3xl" mt={`0`} ml={`-12`}>
          Pancakeswap DEX
        </Heading>
        
      </Link>
      </Flex>
    </Box>
  );
};

export default Radio;
