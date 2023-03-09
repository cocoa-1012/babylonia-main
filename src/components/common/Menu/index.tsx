import type { NextComponentType } from "next";
import { Button, List, ListItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Betting from "../Slider/Betting";
import Win from "../Slider/Win";
import Contact from "../Slider/Contact";
import Games from "../Slider/Games";
import Logs from "../Slider/Logs";
import NFT from "../Slider/Nft";
import Roadmap from "../Slider/Roadmap";
import SliderLayout from "../Slider/SliderLayout";
import Tokenomics from "../Slider/Tokenomics";

import styles from "./styles/index.module.css";
import SvgSelector from "../../../../utils/SvgSelector";

import Image from "../Image";
import { useAppDispatch, useAppSelector } from "@hooks";

type idleFunctionType = any;
interface IMenuItem {
  name: string;
  img: any;
  href: string;
  Content?: NextComponentType;
  width?: string;
  height?: string;
  top?: string;
}

export const menuItems: IMenuItem[] = [
  {
    name: "babylonia",
    img: "BabyloniaIcon",
    href: "https://babylonia.app/docs/",
  },
  {
    name: "Betting",
    img: "BettingIcon",
    href: "https://docs.babylonia.app/babylonia.app/betting",
    Content: Betting,
    top: "50px",
    width: "900px",
    height: "825px",
  },
  {
    name: "Pool",
    img: "DividendIcon",
    href: "https://pool.babylonia.app/",
  },
  {
    name: "Win",
    img: "GameIcon",
    href: "#",
    Content: Win,
    top: "50px",
    width: "900px",
    height: "825px",
  },

  {
    name: "NFT",
    img: "NFTIcon",
    href: "https://nft.babylonia.app/",
    // href: "https://docs.babylonia.app/babylonia.app/nfts",
    // Content: NFT,
  },
  {
    name: "Media",
    img: "MEDIAIcon",
    href: "https://media.babylonia.app/",
    // href: "https://docs.babylonia.app/babylonia.app/nfts",
    // Content: NFT,
  },
  {
    name: "Logs",
    img: "LogsIcon",
    href: "https://docs.babylonia.app/babylonia.app/logs",
    Content: Logs,
  },
  {
    name: "Contact",
    img: "ContactIcon",
    href: "https://docs.babylonia.app/babylonia.app/contact",
    Content: Contact,
    width: "900px",
    height: "825px",
    top: "50px",
  },
  {
    name: "Roadmap",
    img: "RoadmapIcon",
    href: "https://docs.babylonia.app/babylonia.app/roadmap",
    Content: Roadmap,
    width: "1400px",
    height: "745px",
    top: "50px",
  },
  {
    name: "Tokenomics",
    img: "TokenomicIcon",
    href: "https://docs.babylonia.app/babylonia.app/tokenomics",
    Content: Tokenomics,
    width: "900px",
    height: "825x",
    top: "50px",
  },
];

const Index: NextComponentType = () => {
  const MINUTE_MS = 5000;
  let idleTimeAnimations: idleFunctionType = null;
  const [mouseStatus, setMouseStatus] = useState<Boolean>(false);
  const [activeSlider, setActiveSlider] = useState<number | null>(null);
  const [animationState, setAnimationState] = useState<number>(0);

  const {
    Content = null,
    href = null,
    name = "",
    width = "",
    height = "",
    top = "",
  } = activeSlider !== null ? menuItems[activeSlider] : {};

  const handleClose = () => setActiveSlider(null);
  const handleOpen = (index: number) => () => setActiveSlider(index);
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  useEffect(() => {
    const totalListItem: number =
      document.getElementById("list")!.children.length - 1 || 0;

    const interval = setInterval(() => {
      if (mouseStatus) {
        clearInterval(interval);

        return;
      }
      setAnimationState((t) => (t > totalListItem - 1 ? 0 : t + 1));
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [mouseStatus]);

  const removeAnimationOnMouseEvents = (index: number) => {
    const List = document.getElementById("list")?.children;
    const ListArray: Array<any> = [].slice.call(List);
    ListArray[
      index
    ].children[0].children[0].children[0].children[0].classList.remove(
      styles.svgShadow
    );
    ListArray[
      index
    ].children[0].children[0].children[0].children[1].classList.remove(
      styles.itemTextWithAnimationHover
    );
  };

  const handleMouseEnter = (index: number) => {
    setMouseStatus(true);

    const List = document.getElementById("list")?.children;
    const ListArray: Array<any> = [].slice.call(List);

    ListArray.forEach((item: any) => {
      const textItemChildren: any =
        item!.children[0].children[0].children[0].children[1];

      textItemChildren.classList.remove(styles.itemTextWithAnimation);
      textItemChildren.classList.add(styles.itemText);

      item.children[0].children[0].children[0].children[0].children[0].classList.remove(
        styles.svgShadow
      );
    });

    ListArray[
      index
    ]!.children[0].children[0].children[0].children[0].classList.add(
      styles.svgShadow
    );
    ListArray[
      index
    ]!.children[0].children[0].children[0].children[1].classList.add(
      styles.itemTextWithAnimationHover
    );

    idleTimeAnimations = setTimeout(function () {
      setMouseStatus(false);

      removeAnimationOnMouseEvents(index);
    }, 10000);
  };

  const handleMouseLeave = (index: number) => {
    setMouseStatus(false);
    clearTimeout(idleTimeAnimations);
    removeAnimationOnMouseEvents(index);
  };

  return (
    <>
      <List
        display={{ base: "none", sm: "none", md: "block", xl: "block" }}
        position="absolute"
        left="5"
        top="50%"
        ml="0px"
        padding="5px"
        borderRadius="15px"
        backgroundColor="rgba(0,0,0,0.2)"
        transform="translateY(-50%)"
        zIndex="12"
        width={85}
        id="list"
        pointerEvents="all"
      // className={styles.list}
      >
        {menuItems.map(({ Content, img, href, name, width, height }, idx) => (
          <ListItem
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            key={name}
            mb="10px"
            _hover={{
              "& > a, & > button": {
                background: "transparent",
                transform: "translateX(10%)",
              },
            }}
          >
            <Button
              className={grayscaleMode === "gray" ? "grayscale" : ""}
              as={!Content ? "a" : "button"}
              height="50px"
              width="50px"
              // ml="5px"
              background="transparent"
              transition="0.3s"
              onClick={Content && handleOpen(idx)}
              {...(!Content ? { target: "_blank", href } : {})}
            >
              <div className={styles.neonText}>
                <div id="imageContainer" className={styles.itemContainer}>
                  <div
                    className={
                      idx === animationState
                        ? `${styles.imageContainer} ${styles.imageContainerAnimations}`
                        : styles.imageContainer
                    }
                  >
                    <SvgSelector
                      styles={
                        idx === animationState
                          ? styles.svgShadow
                          : styles.textSize
                      }
                      title={img}
                    />
                  </div>
                  <p
                    className={
                      idx === animationState
                        ? `${styles.text} ${styles.itemTextWithAnimation}`
                        : `${styles.text} ${styles.itemText} `
                    }
                  >
                    {name.toUpperCase()}
                  </p>
                </div>
              </div>
            </Button>
          </ListItem>
        ))}
      </List>
      {activeSlider !== null && Content && (
        <SliderLayout
          title={name}
          href={href}
          width={width}
          height={height}
          top={top}
          onClose={handleClose}
        >
          <Content />
        </SliderLayout>
      )}
    </>
  );
};

export default Index;
