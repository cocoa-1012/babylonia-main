import { Box, Button, List, ListItem, Text } from "@chakra-ui/react";
import type { NextComponentType, NextPageContext } from "next";

import Image from "src/components/common/Image";
import Betting from "../Slider/Betting";
import Contact from "../Slider/Contact";
import Games from "../Slider/Games";
import Logs from "../Slider/Logs";
import NFT from "../Slider/Nft";
import Roadmap from "../Slider/Roadmap";
import SliderLayout from "../Slider/SliderLayout";
import Tokenomics from "../Slider/Tokenomics";
import SvgSelector, {SvgIconsList} from "src/utils/SvgSelector";
import { useAppSelector, useAppDispatch } from "@hooks";
import styles from "./styles/index.module.css";

type TProps = {
  isOpen?: boolean;
};
interface IMenuItem {
  name: string;
  img: string;
  href: string;
  title: string;
  Content?: NextComponentType;
}

export const menuItems: IMenuItem[] = [
  {
    name: "babylonia",
    img: "/images/icons/general/icon_diary_64x64.png",
    href: "https://babylonia.app/docs/",
    title: "BabyloniaIcon",
  },
  {
    name: "Betting",
    img: "/images/icons/general/Icon_Betting_001_128x128.png",
    href: "https://docs.babylonia.app/babylonia.app/betting",
    Content: Betting,
    title: "BettingIcon",
  },
  {
    name: "Pool",
    img: "/images/icons/general/icon_dividend_001_128x128.png",
    href: "https://pool.babylonia.app/",
    title: "PoolIcon",
  },
  {
    name: "Media",
    img: "/images/icons/general/icon_dividend_001_128x128.png",
    href: "https://media.babylonia.app/",
    title: "MEDIAIcon",
  },
  {
    name: "Win",
    img: "/images/icons/general/Icon_Game_001_128x128.png",
    href: "https://docs.babylonia.app/babylonia.app/games",
    Content: Games,
    title: "GameIcon",
  },
  {
    name: "Logs",
    img: "/images/icons/general/Icon_Log_001_128x128.png",
    href: "https://docs.babylonia.app/babylonia.app/logs",
    Content: Logs,
    title: "LogsIcon",
  },
  {
    name: "NFT",
    img: "/images/icons/general/Icon_NFT_001_128x128.png",
    href: "https://nft.babylonia.app/",
    Content: NFT,
    title: "NFTIcon",
  },
  // MEDIAIcon
  {
    name: "Contact",
    img: "/images/icons/general/Icon_Partners_002_128x128.png",
    href: "https://docs.babylonia.app/babylonia.app/contact",
    Content: Contact,
    title: "ContactIcon",
  },
  {
    name: "Roadmap",
    img: "/images/icons/general/Icon_Roadmap_001_128x128.png",
    href: "https://docs.babylonia.app/babylonia.app/roadmap",
    Content: Roadmap,
    title: "RoadmapIcon",
  },
  {
    name: "Tokenomics",
    img: "/images/icons/general/Icon_Tockenomics_001_128x128.png",
    href: "https://docs.babylonia.app/babylonia.app/tokenomics",
    Content: Tokenomics,
    title: "TokenomicIcon",
  },
];

const menuItemsMobile = [
  menuItems[4],
  menuItems[2],
  menuItems[6],
  menuItems[3],
  // ...menuItems
  // ...menuItems.slice(0, 5),
];
// const tmp = menuItemsMobile[0];
// menuItemsMobile[0] = menuItemsMobile[3];
// menuItemsMobile[3] = tmp;
const MobileMenu: NextComponentType<NextPageContext, {}, TProps> = ({
  isOpen = false,
}) => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  const showPopupMenuItem = ({
    href,
    name,
  }: {
    href: string;
    name: string;
  }) => (
    <ListItem key={name} height="47px">
      <Button
        as="a"
        href={href}
        bg="transparent"
        fontFamily="'Press Start 2P'"
        fontSize="18px"
        fontWeight={500}
      >
        {name}
      </Button>
    </ListItem>
  );

  return (
    <Box position="relative">
      <List
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        pt="18px"
        pb="60px"
      >
        {menuItemsMobile.slice(0, 4).map(({ img, href, name, title }) => (
          <ListItem
            key={name}
            position="relative"
            mb="10px"
            padding="4px"
            borderRadius="15px"
            // background="rgba(57,93,126,0.52)"
            background={grayscaleMode === "gray" ? "rgba(93,93,93,0.5)" : "rgba(57,93,126,0.52)"}
            _hover={{
              "& > a, & > button": {
                background: "transparent",
                transform: "translateX(20%)",
              },
            }}
          >
            <Button
              href={href}
              as="a"
              height="70px"
              width="70px"
              transition="0.3s"
              target="_blank"
              background="transparent"

            >
              {/* <Image
                src={img}
                alt={img}
                layout="fill"
                objectFit="cover"
               
              /> */}
              <SvgSelector IconName={title}  />
            </Button>
            <Text
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontFamily="'Changa'"
              fontSize="16px"
              left="0"
              top="100%"
              height="40px"
              width="100%"
              color="white"
            >
              {name}
            </Text>
          </ListItem>
        ))}
      </List>
       <List
        position="fixed"
        top={103}
        maxHeight={isOpen ? 500 : 0}
        w="90%"
        bg="brand.500"
        padding={isOpen ? "5%" : "0 5%"}
        borderTop={isOpen ? "3px solid" : "none"}
        borderColor="common.yellow"
        transition="0.3s"
        overflow="hidden"
        zIndex={12}
        color="gray.700"
      >
        {showPopupMenuItem({ href: "https://docs.babylonia.app/babylonia.app/", name: "Docs" })}
        {showPopupMenuItem({ href: "https://docs.babylonia.app/babylonia.app/logs", name: "Logs" })}
        {showPopupMenuItem({ href: "https://docs.babylonia.app/babylonia.app/contact", name: "Contact" })}
        {showPopupMenuItem({ href: "https://docs.babylonia.app/babylonia.app/roadmap", name: "Roadmap" })}
        {showPopupMenuItem({ href: "https://docs.babylonia.app/babylonia.app/tokenomics", name: "Tokenomics" })}
        {/* {showPopupMenuItem(menuItems[0]) } */}
        {/* {menuItemsMobile.slice(3).map(showPopupMenuItem)} */}
      </List>
       
    </Box>
  );
};

export default  MobileMenu;

