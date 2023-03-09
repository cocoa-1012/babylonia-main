import {
  Box,
  Flex,
  Grid,
  GridItem,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { walletActions } from "@store/walletSlice";
import { useEthers } from "@usedapp/core";
import { useEffect, useState } from "react";
import get_tokens_balances_from_avalanche from "src/context/actions/get_tokens_balances_from_avax";
import get_tokens_balances_from_binance_direct from "src/context/actions/get_tokens_balances_from_binance_direct";
import get_tokens_balances_from_ethereum from "src/context/actions/get_tokens_balances_from_ethereum";
import get_tokens_balances_from_fantom from "src/context/actions/get_tokens_balances_from_fantom_direct";
import get_tokens_balances_from_polygon from "src/context/actions/get_tokens_balances_from_polygon_direct";
import get_tokens_balances_from_solana from "src/context/actions/get_Tokens_balances_from_solana";
import { default as chains } from "../../../configs/chains.json";
import { BabyButton } from "../BabyButton";
import ConnectButton from "../ConnectButton";
import { HelpButton } from "../HelpButton/index";
import NetworkSelectedMenu from "../NetworkSelectedMenu/index";
import { ProfileButton } from "../ProfileButton";
import { SettingsButton } from "../SettingsButton";

export default function Header(props: any) {
  const dispatch = useAppDispatch();
  const [babyBalance, setBabyBalance] = useState(0);
  const bg = useColorModeValue("gray.700", "gray.900");
  const color = useColorModeValue("gray.900", "gray.100");
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  const selectedWallet = useAppSelector(
    (state: any) => state.wallet.selectedWallet
  );
  const tokenList = useAppSelector((state: any) => state.wallet.tokenList);
  const solana = useAppSelector((state: any) => state.solana);
  const { chainId, account } = useEthers();
  const buttonStyle = {
    bg: "transparent",
    _hover: {
      background: "transparent",
      transform: "scale(1.2)",
    },
  };

  const setTokenList = (tokens: any[]) => {
    dispatch(walletActions.setTokenList(tokens));
  };

  const getList = async (resetList: boolean) => {
    await loadTokenList(resetList);
  };
  const loadTokenList = async (resetList: boolean) => {
    if (selectedWallet === "MetaMask" || selectedWallet === "TrustWallet") {
      if ([56, 97].includes(chainId as number)) {
        var list: any = [];
        get_tokens_balances_from_binance_direct(
          String(account),
          String(chainId)
        )
          .then((data) => {
            data.map((i: any) => {
              if (i.symbol === "BABY") list.push(i);
            });
            data.map((i: any) => {
              if (i.symbol === "BNB") list.push(i);
            });
            data.map((i: any) => {
              if (i.symbol !== "BNB" && i.symbol !== "BABY") {
                if (parseFloat(i.usd_balance).toFixed(2) !== "0.00")
                  list.push(i);
              }
            });
            setTokenList(list);
          })
          .catch((error) => {
            console.log(
              "error ###############################",
              error,
              account
            );
          });
      } else if ([137, 80001].includes(chainId as number)) {
        var list: any = [];
        get_tokens_balances_from_polygon(String(account), String(chainId))
          .then((data) => {
            data.map((i: any) => {
              if (i.symbol === "BABY") list.push(i);
            });
            data.map((i: any) => {
              if (i.symbol === "MATIC") list.push(i);
            });
            data.map((i: any) => {
              if (i.symbol !== "MATIC" && i.symbol !== "BABY") {
                if (parseFloat(i.usd_balance).toFixed(2) !== "0.00")
                  list.push(i);
              }
            });
            console.log("list=", list);

            setTokenList(list);
          })
          .catch((error) => {
            console.log("error", error);
          });
      } else if ([250, 4002].includes(chainId as number)) {
        var list: any = [];
        get_tokens_balances_from_fantom(String(account), String(chainId))
          .then((data) => {
            data.map((i: any) => {
              if (i.symbol === "BABY") list.push(i);
            });
            data.map((i: any) => {
              if (i.symbol === "FTM") {
                list.push(i);
              }
            });
            data.map((i: any) => {
              if (i.symbol !== "FTM" && i.symbol !== "BABY") {
                if (parseFloat(i.usd_balance).toFixed(2) !== "0.00")
                  list.push(i);
              }
            });
            setTokenList(list);
          })
          .catch((error) => {
            console.log("error", error);
          });
      } else if ([1, 4].includes(chainId as number)) {
        var list: any = [];
        get_tokens_balances_from_ethereum(String(account), String(chainId))
          .then((data) => {
            data.map((i: any) => {
              if (i.symbol === "ETH") {
                // console.log("ETH = ", etherBalance);
                list.push(i);
              }
            });
            data.map((i: any) => {
              if (i.symbol !== "ETH") list.push(i);
            });
            setTokenList(list);
          })
          .catch((error) => {
            console.log("error", error);
          });
      } else if ([43113, 43114].includes(chainId as number)) {
        var list: any = [];
        get_tokens_balances_from_avalanche(String(account), String(chainId))
          .then((data) => {
            data.map((i: any) => {
              if (i.symbol === "AVAX") {
                list.push(i);
              }
            });
            data.map((i: any) => {
              if (i.symbol !== "AVAX") list.push(i);
            });
            setTokenList(list);
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    } else if (selectedWallet === "Solana") {
      if (solana.network === "solana") {
        get_tokens_balances_from_solana(solana.walletAddress, "10000")
          .then((data) => {
            var list: any = [];
            data.map((i: any) => {
              if (i.symbol === "SOL") {
                list.push(i);
              }
            });
            data.map((i: any) => {
              if (i.symbol !== "SOL") list.push(i);
            });
            setTokenList(list);
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    }
  };

  const setSelectedNetwork = (network: string, chainId: number) => {
    dispatch(walletActions.setTokenList([]));
    dispatch(walletActions.setSelectedNetwork(network));
  };

  useEffect(() => {
    console.log("Token====", tokenList);
    if (tokenList.length === 0) {
      setBabyBalance(0);
    } else if (!tokenList) {
      console.log("Token list is null");
    } else {
      console.log("TokenList", tokenList);
      tokenList.map((tokenItem: any, idx: any) => {
        tokenItem.symbol === "BABY"
          ? setBabyBalance(tokenItem.balance)
          : console.log("Baby:");
      });
    }
  }, [tokenList, chainId]);

  useEffect(() => {
    if (selectedWallet === "MetaMask" || selectedWallet === "TrustWallet") {
      const chain = chains.find((c: any) => c.chainId === chainId);
      setSelectedNetwork(String(chain && chain.chain), Number(chainId));
      getList(true);
    } else if (selectedWallet === "Solana") {
      if (solana.network === "solana") {
        getList(true);
      }
    }
  }, [chainId]);

  return (
    <Flex
      {...props}
      zIndex="200"
      as="header"
      position="fixed"
      right="0"
      top="0"
      mx="0"
      px="0"
      width={{ sm: "100vw", lg: "auto" }}
    >
      <Grid
        justifyContent={{ sm: "space-around", lg: "flex-start" }}
        className={grayscaleMode === "gray" ? " grayscale " : ""}
        bg="rgba(0,0,0,0.2)"
        borderRadius={{ sm: "0px", lg: "15px" }}
        padding="6px 0px"
        h="full"
      >
        <GridItem colSpan={[4, 4, 1]}>
          <Flex h="full" alignItems="center" justifyContent="right">
            <Box h="40px">
              <BabyButton
                display={{ base: "none", md: "none", xl: "block" }}
                babyBalance={babyBalance}
              />
            </Box>
            <Box mr="15px" w="40px" h="40px">
              <HelpButton
                display={{ base: "none", md: "none", xl: "block" }}
                {...buttonStyle}
              />
            </Box>
            <NetworkSelectedMenu />
            <Stack
              // spacing={8}
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
              px="5"
              mx="2"
            >
              <ConnectButton
                key="HeaderConnectButton"
                display={{ base: "none", md: "none", xl: "block" }}
                direction={"row"}
              />
            </Stack>
            <Box mr={["15px", "", ""]} w="40px" h="40px">
              <SettingsButton />
            </Box>
            <Box
              display={["none", "none", "block", "block"]}
              mr={["15px", "", ""]}
              w="40px"
              h="40px"
              {...buttonStyle}
            >
              <ProfileButton />
            </Box>
            {/* <Box display={["block", "block", "none", "none"]}>
                <TopMobileMenu />
              </Box> */}
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
