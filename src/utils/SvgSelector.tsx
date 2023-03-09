import React, { useState, useEffect } from "react";
import BabyloniaIcon from "src/assets/images/menu_icons/icon_home_03.svg";
import BettingIcon from "src/assets/images/menu_icons/Icon_betting_02.svg";
import ContactIcon from "src/assets/images/menu_icons/Icon_partners_03.svg";
import DividendIcon from "src/assets/images/menu_icons/Icon_pool-03.svg";
import GameIcon from "src/assets/images/menu_icons/icon_win-02.svg";
import LogsIcon from "src/assets/images/menu_icons/Icon_log_01.svg";
import MEDIAIcon from "src/assets/images/menu_icons/icon_media_01.svg";
import PoolIcon from "src/assets/images/menu_icons/icon_pool_02.svg";
import NFTIcon from "src/assets/images/menu_icons/icon_NFT_03.svg";
import RoadmapIcon from "src/assets/images/menu_icons/Icon_roadmap_01.svg";
import TokenomicIcon from "src/assets/images/menu_icons/Icon_tockenomics_02.svg";
import { Box } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "@hooks";
interface SvgProps {
  IconName: string;
  title?: keyof SvgIconsListType;
  styles?: string;
  size?: Number;
}

export const SvgIconsList: any = {
  BabyloniaIcon: BabyloniaIcon,
  BettingIcon: BettingIcon,
  DividendIcon: DividendIcon,
  GameIcon: GameIcon,
  LogsIcon: LogsIcon,
  NFTIcon: NFTIcon,
  MEDIAIcon: MEDIAIcon,
  PoolIcon: PoolIcon,
  ContactIcon: ContactIcon,
  RoadmapIcon: RoadmapIcon,
  TokenomicIcon: TokenomicIcon,
};
export interface SvgIconsListType {
  BabyloniaIcon: any;
  BettingIcon: any;
  DividendIcon: any;
  GameIcon: any;
  LogsIcon: any;
  NFTIcon: any;
  MEDIAIcon: any;
  PoolIcon: any;
  ContactIcon: any;
  RoadmapIcon: any;
  TokenomicIcon: any;
}

const SvgSelector = ({ IconName, title, styles, size = 70 }: SvgProps) => {
  const RenderSVG = SvgIconsList[IconName];
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  if (!RenderSVG) return null;
  return (
    <RenderSVG
      viewBox="0 0 512 512"
      width={`${size}px`}
      height={`${size}px`}
      className={grayscaleMode === "gray" ? "grayscale " + styles : "" + styles}
    />
  );
};

export default SvgSelector;
