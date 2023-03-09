import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { useAppSelector } from "@hooks";
import type { NextComponentType } from "next";
import Image from "next/image";
import useAppState, { ACTIONS } from "src/hooks/useAppState";
const Ample: NextComponentType = () => {
  const { dispatch } = useAppState();
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box position="fixed" top={100} right={530} zIndex={999}>
      <Flex alignItems={`center`} flexDirection={`column`}>
        <Box width={"130px"}>
          <Link href={`https://ampleswap.com`} isExternal>
            <Image
              className={
                grayscaleMode === "gray"
                  ? "grayscale speakerTextGrey cursoor"
                  : "cursoor"
              }
              alt="speaker"
              onLoad={() => dispatch({ type: ACTIONS.INCREMENT_LOADED_IMAGES })}
              src="/images/SVG/ample.svg"
              id="face"
              width={"98px"}
              height="98px"
              z-index={`993`}
            />
          </Link>
          <Box position="fixed" top={115} right={450} zIndex={999}>
            <Image
              className={
                grayscaleMode === "gray" ? "grayscale speakerTextGrey " : " "
              }
              alt="speaker"
              onLoad={() => dispatch({ type: ACTIONS.INCREMENT_LOADED_IMAGES })}
              src="/images/SVG/arrow-right-left.svg"
              width={"110px"}
              height="70px"
              z-index={`993`}
            />
          </Box>
        </Box>

        <Link
          fontSize={"24px"}
          color={"#E2E2E2"}
          cursor="pointer"
          isExternal
          href={`https://ampleswap.com`}
          style={{ textDecoration: "none" }}
        >
          <Heading className="mintNowHeading3" size="3xl" mt={`0`} ml={`-12`}>
            AMPLE SWAP
          </Heading>
        </Link>
      </Flex>
    </Box>
  );
};

export default Ample;
