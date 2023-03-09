import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import BinanceNetwork from "@assets/images/networks/BSC_128x128.png";
import EthereumNetwork from "@assets/images/networks/ETH_64.png";
import FantomNetwork from "@assets/images/networks/Fantom_128x128.png";
import AvaxNetwork from "@assets/images/networks/icon_avax_01_64px.png";
import UnselectedNetworks from "@assets/images/networks/Networks.png";
import PhantomNetwork from "@assets/images/networks/phantom-wallet_128px.png";
import PolygonNetwork from "@assets/images/networks/Polygon_128x128.png";

import { useAppSelector } from "@hooks";
import { useEthers } from "@usedapp/core";
import Image from "next/image";

declare const window: any;

const NetworkSelectedMenu = (props: any) => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  const bgBtnDrawerSelected = useColorModeValue("gray.600", "gray.300");
  const bgBtnDrawerNotSelected = useColorModeValue("gray.300", "gray.800");
  const bgBtnTextSelected = useColorModeValue("gray.100", "gray.900");
  const bgBtnTextNotSelected = useColorModeValue("gray.800", "gray.400");
  const selectedWallet = useAppSelector(
    (state: any) => state.wallet.selectedWallet
  );
  const { chainId } = useEthers();

  const addBSCNet = () => {
    console.log("addBSC");
    // setSelectedNetwork("BSC", 56);
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x38",
            chainName: "Binance Smart Chain Mainnet",
            nativeCurrency: {
              name: "Binance Chain Native Token",
              symbol: "BNB",
              decimals: 18,
            },
            rpcUrls: ["https://bsc-dataseed.binance.org/"],
            blockExplorerUrls: ["https://bscscan.com"],
          },
        ],
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const addPolygonNet = () => {
    console.log("addPolygonNet");
    // setSelectedNetwork("Polygon", 137);
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x89",
            chainName: "Polygon Mainnet",
            nativeCurrency: {
              name: "Polygon(MATIC) Coin",
              symbol: "MATIC",
              decimals: 18,
            },
            rpcUrls: ["https://polygon-rpc.com/"],
            blockExplorerUrls: ["https://polygonscan.com/"],
          },
        ],
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const addFantomNet = () => {
    console.log("addFantomNet");
    // setSelectedNetwork("Fantom", 250);
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xfa",
            chainName: "Fantom Opera",
            nativeCurrency: {
              name: "Fantom",
              symbol: "FTM",
              decimals: 18,
            },
            rpcUrls: ["https://rpc.ftm.tools/"],
            blockExplorerUrls: ["https://ftmscan.com/"],
          },
        ],
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const addAvaxMainNet = () => {
    console.log("addFantomTestNet");
    // setSelectedNetwork("Avax", 43114);
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xA86A",
            chainName: "Avax mainnet",
            nativeCurrency: {
              name: "AVAX",
              symbol: "AVAX",
              decimals: 18,
            },
            rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
            blockExplorerUrls: ["https://snowtrace.io/"],
          },
        ],
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const { mode } = useAppSelector((state) => state.theme);
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
    _hover: {
      background: "transparent",
      transform: "scale(1.2)",
    },
  };

  if (selectedWallet === "Solana") {
    return (
      <Menu
      // isOpen={networkButton}
      >
        <MenuButton
          w="40px"
          h="40px"
          // icon={SettingsIcon.src}
          // borderRadius="10px"
          aria-label="Chain Selector Button"
          fontWeight="normal"
        >
          <Flex {...props} cursor={"pointer"} w="40px" h="40px">
            <Image
              alt="Settings Button"
              className={grayscaleMode === "gray" ? "grayscale" : ""}
              src={PhantomNetwork.src}
              width="40px"
              height="40px"
            ></Image>
          </Flex>
        </MenuButton>
        <MenuList
          // backgroundColor={mode === "dark" ? "gray.800" : "gray.200"}
          borderWidth={"1px"}
          borderColor={mode === "dark" ? "gray.200" : "gray.800"}
          zIndex={1600}
          borderRadius={"10px"}
          fontFamily={"Ropa Sans"}
          fontSize={16}
          _hover={
            {
              // transitionDuration: "100ms",
            }
          }
        >
          <MenuItem
            _hover={hover}
            onClick={() => {
              // onOpen();
              // comingsoon();
            }}
            h="45px"
            py="0"
          >
            <Flex
              align="center"
              cursor={"pointer"}
              className={"selectchain-item"}
              borderRadius="10"
              my="0"
              bg={
                chainId === 0xa86a
                  ? bgBtnDrawerSelected
                  : bgBtnDrawerNotSelected
              }
              onClick={() => {
                // addAvaxMainNet();
              }}
              w="full"
            >
              <Image
                className={grayscaleMode === "gray" ? "grayscale" : ""}
                width="40px"
                height="40px"
                src={PhantomNetwork.src}
                alt="Pahntom Mainnet"
              ></Image>
              <Text
                ml="10px"
                color={
                  chainId === 0xa86a ? bgBtnTextSelected : bgBtnTextNotSelected
                }
              >
                Phantom Mainnet
              </Text>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  } else if (
    selectedWallet === "MetaMask" ||
    selectedWallet === "TrustWallet"
  ) {
    return (
      <Menu
      // isOpen={networkButton}
      >
        <MenuButton
          w="40px"
          h="40px"
          {...buttonStyle}
          // icon={SettingsIcon.src}
          // borderRadius="10px"
          aria-label="Chain Selector Button"
          fontWeight="normal"
        >
          <Box {...props} cursor={"pointer"} w="40px" h="40px">
            <Image
              alt="Settings Button"
              className={grayscaleMode === "gray" ? "grayscale" : ""}
              src={
                chainId == 97 || chainId == 56
                  ? BinanceNetwork
                  : chainId == 137 || chainId == 80001
                  ? PolygonNetwork
                  : chainId == 250 || chainId == 4002
                  ? FantomNetwork
                  : chainId == 1 || chainId == 4
                  ? EthereumNetwork
                  : chainId == 43113 || chainId == 43114
                  ? AvaxNetwork
                  : UnselectedNetworks
              }
              width="40px"
              height="40px"
            ></Image>
          </Box>
        </MenuButton>
        <MenuList
          // backgroundColor={mode === "dark" ? "gray.800" : "gray.200"}
          borderWidth={"1px"}
          borderColor={mode === "dark" ? "gray.200" : "gray.800"}
          zIndex={1600}
          borderRadius={"10px"}
          fontFamily={"Ropa Sans"}
          fontSize={16}
          width="225px"
          _hover={
            {
              // transitionDuration: "100ms",
            }
          }
        >
          <MenuItem
            _hover={hover}
            onClick={() => {
              // onOpen();
              // comingsoon();
            }}
            h="45px"
            py="0"
          >
            <Flex
              align="center"
              cursor={"pointer"}
              className={"selectchain-item"}
              borderRadius="10"
              my="0"
              // bg={bgBtnDrawer}
              bg={chainId === 56 ? bgBtnDrawerSelected : bgBtnDrawerNotSelected}
              onClick={() => {
                addBSCNet();
              }}
              w="full"
            >
              <Image
                className={grayscaleMode === "gray" ? "grayscale" : ""}
                width="40px"
                height="40px"
                src={BinanceNetwork}
                alt="Binance Mainnet"
              ></Image>
              <Text
                ml="10px"
                color={
                  chainId === 56 ? bgBtnTextSelected : bgBtnTextNotSelected
                }
              >
                Binance Mainnet
              </Text>
            </Flex>
          </MenuItem>

          <MenuItem _hover={hover} onClick={() => {}} h="45px" py="0">
            <Flex
              align="center"
              cursor={"pointer"}
              className={"selectchain-item"}
              borderRadius="10"
              my="0"
              bg={
                chainId === 137 ? bgBtnDrawerSelected : bgBtnDrawerNotSelected
              }
              onClick={() => {
                addPolygonNet();
              }}
              w="full"
            >
              <Image
                className={grayscaleMode === "gray" ? "grayscale" : ""}
                width="40px"
                height="40px"
                src={PolygonNetwork}
                alt="Polygon Mainnet"
              ></Image>
              <Text
                ml="10px"
                color={
                  chainId === 137 ? bgBtnTextSelected : bgBtnTextNotSelected
                }
              >
                Polygon Mainnet
              </Text>
            </Flex>
          </MenuItem>

          <MenuItem
            _hover={hover}
            onClick={() => {
              // onOpen();
              // comingsoon();
            }}
            h="45px"
            py="0"
          >
            <Flex
              align="center"
              cursor={"pointer"}
              className={"selectchain-item"}
              borderRadius="10"
              my="0"
              bg={
                chainId === 250 ? bgBtnDrawerSelected : bgBtnDrawerNotSelected
              }
              onClick={() => {
                addFantomNet();
              }}
              w="full"
            >
              <Image
                className={grayscaleMode === "gray" ? "grayscale" : ""}
                width="40px"
                height="40px"
                src={FantomNetwork}
                alt="Fantom mainnet"
              ></Image>
              <Text
                ml="10px"
                color={
                  chainId === 250 ? bgBtnTextSelected : bgBtnTextNotSelected
                }
              >
                Fantom Mainnet
              </Text>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  } else {
    return (
      <Menu>
        <MenuButton
          w="40px"
          h="40px"
          aria-label="Chain Selector Button"
          fontWeight="normal"
        >
          <Box {...props} cursor={"pointer"} w="40px" h="40px">
            <Image
              alt="Settings Button"
              className={grayscaleMode === "gray" ? "grayscale" : ""}
              src={UnselectedNetworks.src}
              width="40px"
              height="40px"
            ></Image>
          </Box>
        </MenuButton>
      </Menu>
    );
  }
};

export default NetworkSelectedMenu;
