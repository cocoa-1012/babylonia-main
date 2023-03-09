import HelpIcon from "@assets/images/buttons/question.png";
import { Box } from "@chakra-ui/react";
import { useAppSelector } from "@hooks";
import Image from "next/image";
import Link from "next/link";

export const HelpButton = (props: any) => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box {...props} cursor={"pointer"} w="40px" h="40px">
      <Link href="https://docs.babylonia.app/babylonia.app/easyguide" passHref>
        <a target="_blank">
          <Image
            src={HelpIcon}
            className={grayscaleMode === "gray" ? "grayscale" : ""}
            width={"40px"}
            height={"40px"}
            alt="Help Button"
          ></Image>
        </a>
      </Link>
    </Box>
  );
};
