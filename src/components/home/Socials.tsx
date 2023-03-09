import { Box, Button, List, ListItem } from "@chakra-ui/react";
import { NextComponentType } from "next";
import { useState } from "react";

import useIsMobile from "src/hooks/useIsMobile";

import EmailForm from "src/components/common/EmailForm";
// import Image from "src/components/common/Image";
import { useAppSelector } from "@hooks";
import SliderLayout from "src/components/common/Slider/SliderLayout";

// import TwitterIcon from "../../../public/images/icons/general/svg/Icon_twitter_01.svg";
// import TelegramIcon from "../../../public/images/icons/general/svg/Icon_telegram_02.svg";
// import InstagramIcon from "../../../public/images/icons/general/svg/icon_instagram_01.svg";
// import EmailIcon from "../../../public/images/icons/general/svg/Icon_email_01.svg";

import DiscordIcon from "../../../public/images/SVG/discord128px.svg";
import EmailIcon from "../../../public/images/SVG/Icon_email_01.svg";
import InstagramIcon from "../../../public/images/SVG/icon_instagram_001_128x128.svg";
import TelegramIcon from "../../../public/images/SVG/Icon_telegram_02.svg";
import TwitterIcon from "../../../public/images/SVG/Icon_twitter_01.svg";
import NomicsIcon from "../../../public/images/SVG/Nomics_Logomark_Horz-Purple.svg";

interface SvgIconsListType {
  TwitterIcon: any;
  TelegramIcon: any;
  InstagramIcon: any;
  EmailIcon: any;
  DiscordIcon: any;
  NomicsIcon: any;
}

const SvgIconsList: SvgIconsListType = {
  TwitterIcon: TwitterIcon,
  TelegramIcon: TelegramIcon,
  InstagramIcon: InstagramIcon,
  EmailIcon: EmailIcon,
  DiscordIcon: DiscordIcon,
  NomicsIcon: NomicsIcon,
};

const socialsList = [
  {
    name: "nomics",
    img: "/images/icons/general/Nomics_Graphicmark-Purple_200x200.png",
    svg: SvgIconsList["NomicsIcon"],
    href: "https://nomics.com/assets/baby5-babylonia",
  },
  {
    name: "discord",
    img: "/images/icons/general/svg/icon_discord_64px.png",
    svg: SvgIconsList["DiscordIcon"],
    href: "https://discord.gg/XJzdsJZayH",
  },
  {
    name: "twitter",
    img: "/images/icons/general/svg/Icon_twitter_01.svg",
    svg: SvgIconsList["TwitterIcon"],
    href: "https://twitter.com/AppBabylonia",
  },
  {
    name: "telegram",
    img: "/images/icons/general/Icon_Telegram_001_128x128.png",
    svg: SvgIconsList["TelegramIcon"],
    href: "https://t.me/babyloniageneralchat",
  },
  {
    name: "instagram",
    img: "/images/icons/general/Icon_Instagram_001_128x128.png",
    svg: SvgIconsList["InstagramIcon"],
    href: "https://www.instagram.com/appbabylonia/",
  },
];

const Socials: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const isMobile = useIsMobile();
  const buttonStyle = {
    // w: "40px",
    // h: "40px",
    bg: "transparent",
    _hover: {
      background: "transparent",
      transform: "scale(1.2)",
    },
  };

  const handleEmailOpen = () => {
    setIsEmailOpen(true);
  };

  const handleEmailClose = () => {
    setIsEmailOpen(false);
  };

  const showSocial = ({
    name,
    img,
    svg,
    href,
  }: {
    name: string;
    img: string;
    svg: any;
    href: string;
  }) => {
    const SvgIcon = svg;
    return (
      <ListItem key={name} py="8px" px="0px" pointerEvents="all">
        <Button as="a" href={href} target="_blank" {...buttonStyle}>
          {name == "nomics" ? (
            <SvgIcon viewBox="0 0 220 220" width="42px" height="42px" />
          ) : name == "discord" ? (
            <SvgIcon viewBox="0 0 40 40" width="48px" height="48px" />
          ) : name == "instagram" ? (
            <SvgIcon viewBox="0 0 3500 3500" width="40px" height="40px" />
          ) : name == "telegram" ? (
            <SvgIcon viewBox="0 0 25 25" width="40px" height="40px" />
          ) : (
            <SvgIcon viewBox="0 0 512 512" width="40px" height="40px" />
          )}
          {/* <Image
            className={grayscaleMode === "gray" ? "grayscale" : ""}
            src={img}
            alt={name}
            layout="fill"
          /> */}
        </Button>
      </ListItem>
    );
  };

  return (
    <Box
      position="fixed"
      left={{ sm: "0px", lg: "72%" }}
      // h="64px"
      // bg="white"
      bottom={{ sm: "0px", lg: "88px" }}
      width={{ sm: "100vw", lg: "auto" }}
      pointerEvents="all"
    >
      <List
        justifyContent={{ sm: "space-around", lg: "flex-start" }}
        className={grayscaleMode === "gray" ? " grayscale " : ""}
        display="flex"
        // alignItems="center"
        bg="rgba(0,0,0,0.2)"
        borderRadius={{ sm: "0px", lg: "15px" }}
        padding="6px 0"
        // transform={{ sm: "none", lg: "translateX(-50%)" }}
        zIndex="2"
      >
        {socialsList.slice(0, 2).map(showSocial)}
        {/* {isMobile
          ? showSocial({
              name: "medium",
              href: "https://medium.com/@babylonia.app",
              svg: SvgIconsList["EmailIcon"],
              img: "/images/icons/general/Icon_Medium_001_128x128.png",
            })
          : ""} */}
        {socialsList.slice(2).map(showSocial)}
        {isMobile ? (
          showSocial({
            name: "email",
            href: "https://www.babylonia.app/mobile-email-form/",
            svg: SvgIconsList["EmailIcon"],
            img: "/images/icons/general/Icon_Email_001_128x128.png",
          })
        ) : (
          <ListItem py="8px" pl="0px" key="email" pointerEvents="all">
            <Button as="a" href="#" {...buttonStyle} onClick={handleEmailOpen}>
              <EmailIcon viewBox="0 0 512 512" width="40px" height="40px" />
              {/* <Image
                className={grayscaleMode === "gray" ? "grayscale" : ""}
                src="/images/icons/general/Icon_Email_001_128x128.png"
                alt="mail"
                layout="fill"
              /> */}
            </Button>
          </ListItem>
        )}
      </List>
      {!isMobile && isEmailOpen && (
        <SliderLayout
          title="Contact form"
          onClose={handleEmailClose}
          width="700px"
          height="530px"
        >
          <EmailForm />
        </SliderLayout>
      )}
    </Box>
  );
};

export default Socials;
