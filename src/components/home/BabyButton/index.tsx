import BabyIcon from "@assets/images/networks/icon_baby_02_128px.png";
import { Box, Heading } from "@chakra-ui/react";
import { useAppSelector } from "@hooks";
import Image from "next/image";

export const BabyButton = (props: any) => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box {...props.styleval} cursor={"pointer"} display="flex" mr={`16`}>
      <Heading className="mintNowHeading3" size="3xl" mt={`0`} mx={`5`}>
        {props.babyBalance.toFixed(2)}
      </Heading>
      <Image
        src={BabyIcon}
        className={grayscaleMode === "gray" ? "grayscale" : ""}
        width={"40px"}
        height={"40px"}
        alt="Help Button"
      />
    </Box>
  );
};
