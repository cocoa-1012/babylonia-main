import ProfileIcon from "@assets/images/buttons/NFT-people-Anonymous.png";
import { Box, Menu, MenuButton, useToast } from "@chakra-ui/react";
import { useAppSelector } from "@hooks";
import Image from "next/image";

export const ProfileButton = (props: any) => {
  const toast = useToast();
  const { mode } = useAppSelector((state) => state.theme);
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  const comingsoon = () => {
    toast({
      position: "top-right",
      render: () => (
        <Box
          color={mode === "dark" ? "gray.200" : "gray.800"}
          p={3}
          bg={mode === "dark" ? "gray.800" : "gray.200"}
          borderRadius={"10px"}
          fontSize={18}
          fontFamily="Ropa Sans"
        >
          Coming soon!
        </Box>
      ),
      duration: 800,
      isClosable: true,
    });
  };

  const hover = {
    bg: "gray.300",
    color: "gray.700",
    borderRadius: "10px",
    px: "8px",
    mx: "5px",
    w: "96%",
  };

  return (
    <Menu>
      <MenuButton
        borderRadius="10px"
        aria-label="Profile Button"
        fontWeight="normal"
        onClick={() => {
          comingsoon();
        }}
        className={grayscaleMode === "gray" ? "grayscale" : ""}
      >
        <Box {...props} cursor={"pointer"} w={"40px"} h="40px">
          <Image
            className={props.gray === "gray" ? "grayscale" : ""}
            alt="Settings Button"
            src={ProfileIcon}
            width="40px"
            height="40px"
          ></Image>
        </Box>
      </MenuButton>
    </Menu>
  );
};
