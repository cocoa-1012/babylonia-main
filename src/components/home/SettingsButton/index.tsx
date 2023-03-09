import SettingsIcon from "@assets/images/buttons/setting-gear.png";
import {
  Box,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import useGrayScaleMode from "@hooks/useGrayScaleMode";
import Image from "next/image";
import { IoMdColorPalette } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import SwitchToggle from "../Toggle";

export const SettingsButton = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [grayscaleMode, setGrayscaleMode] = useGrayScaleMode();

  const hover = {
    bg: "gray.300",
    color: "gray.700",
    borderRadius: "10px",
    px: "8px",
    mx: "5px",
    w: "96%",
  };
  const buttonStyle = {
    bg: "transparent",
    w: "40px",
    h: "40px",
    _hover: {
      background: "transparent",
      transform: "scale(1.2)",
    },
  };

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        {...buttonStyle}
        aria-label="Setting Button"
        fontWeight="normal"
      >
        <Box {...props} cursor={"pointer"} w="40px" h="40px">
          <Image
            className={grayscaleMode === "gray" ? "grayscale" : ""}
            alt="Settings Button"
            src={SettingsIcon}
            width="40px"
            height="40px"
          ></Image>
        </Box>
      </MenuButton>
      <MenuList
        zIndex={1400}
        borderRadius={"10px"}
        fontFamily={"Ropa Sans"}
        fontSize={18}
        width="230px"
      >
        <MenuItem _hover={hover}>
          <SwitchToggle
            checked={grayscaleMode === "gray"}
            setChecked={(value: boolean) =>
              setGrayscaleMode(value ? "gray" : "color")
            }
            label={"Grayscale Mode"}
            icon={<IoMdColorPalette size="30px" />}
          />
        </MenuItem>
        <MenuDivider borderColor="gray.400" />
        <MenuItem _hover={hover}>
          <SwitchToggle
            checked={colorMode === "dark"}
            setChecked={toggleColorMode}
            label={"Dark Mode"}
            icon={<MdDarkMode size="30px" />}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
