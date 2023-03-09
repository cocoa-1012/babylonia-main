import { NextComponentType } from "next";
import { Box, Button, List, ListItem, Text } from "@chakra-ui/react";

import Image from "src/components/common/Image";
import { useAppSelector, useAppDispatch } from "@hooks";

const linksLeft = [
  {
    img: "/images/icons/general/icon_bingo_02_128x128.png",
    href: "https://game.babylonia.app/Bingo_Game/Bingo_Game.html",
    name: "Bingo",
    subtitle: "classic",
  },
  {
    img: "/images/icons/general/icon_dices_02_128x128.png",
    href: "https://game.babylonia.app/Dice_Game/Dice_Classic.html",
    name: "Classic Dice",
  },
  {
    img: "/images/icons/general/icon_casino-roulette_001_128x128.png",
    name: "Roulette",
  },
  {
    img: "/images/icons/general/icon_lottery_001_128x128.png",
    name: "Lottery",
  },
];

const linksRight = [
  { img: "/images/icons/general/icon_slot-machine_001.png", name: "Slot" },
];

const Games: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  const renderLink = ({
    href,
    name,
    subtitle,
    img,
  }: {
    href?: string;
    name: string;
    img: string;
    subtitle?: string;
  }) => (
    <ListItem key={name}>
      <Button
        as={href ? "a" : "button"}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        h="84px"
        w="100%"
        mb="50px"
        bg="transparent"
        cursor={href ? "pointer" : "default"}
        _hover={{ background: "transparent" }}
        {...(href
          ? { color: "white", target: "_blank", href }
          : { color: "common.grey" })}
      >
        <Box position="relative" minW="84px" h="84px">
          <Image
            className={grayscaleMode === "gray" ? "grayscale" : ""}
            src={img}
            alt={name}
            w="84px"
            layout="fill"
          />
        </Box>
        <Text
          position="relative"
          fontFamily="'Press Start 2P'"
          fontSize="3rem"
          fontWeight="500"
          ml="15px"
          whiteSpace="break-spaces"
        >
          {name}
          {subtitle && (
            <Text
              position="absolute"
              right="0px"
              bottom="0px"
              fontFamily="'Changa',handwriting"
              fontSize="26px"
              transform="translate(100%, 50%)"
            >
              {subtitle}
            </Text>
          )}
        </Text>
      </Button>
    </ListItem>
  );

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      w="100%"
      pb="150px"
    >
      <List p="50px" w="60%" minH="100%">
        {linksLeft.map(renderLink)}
      </List>
      <List p="50px" w="40%" minH="100%">
        {linksRight.map(renderLink)}
      </List>
    </Box>
  );
};

export default Games;
