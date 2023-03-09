import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { useAppSelector } from "@hooks";
import type { NextComponentType } from "next";
import Image from "next/image";
import useAppState, { ACTIONS } from "src/hooks/useAppState";
const Vizsla: NextComponentType = () => {
  const { dispatch } = useAppState();
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box position="fixed" top={310} right={235} zIndex={999}>
      <Flex alignItems={`center`} flexDirection={`column`}>
        <Box width={"130px"}>
          <Link href={`https://www.vizslaswap.com`} isExternal>
            <Image
              className={
                grayscaleMode === "gray"
                  ? "grayscale speakerTextGrey cursoor"
                  : "cursoor"
              }
              alt="speaker"
              onLoad={() => dispatch({ type: ACTIONS.INCREMENT_LOADED_IMAGES })}
              src="/images/SVG/vizsla.svg"
              id="face"
              width={"90px"}
              height="90px"
              z-index={`993`}
            />
          </Link>
          <Box position="fixed" top={222} right={280} zIndex={999}>
            <Image
              className={
                grayscaleMode === "gray" ? "grayscale speakerTextGrey " : " "
              }
              alt="speaker"
              onLoad={() => dispatch({ type: ACTIONS.INCREMENT_LOADED_IMAGES })}
              src="/images/SVG/arrow-top-bottom.svg"
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
          href={`https://www.vizslaswap.com`}
          style={{ textDecoration: "none" }}
        >
          <Heading className="mintNowHeading3" size="3xl" mt={`0`} ml={`-12`}>
            Vizsla SWAP
          </Heading>
        </Link>
      </Flex>
    </Box>
  );
};

export default Vizsla;
