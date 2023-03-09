import { Box } from "@chakra-ui/react";
import type { NextComponentType } from "next";
import { useAppSelector, useAppDispatch } from "@hooks";

const TradingWidget: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box
      className={grayscaleMode === "gray" ? "grayscale" : ""}
      position="fixed"
      left="50%"
      bottom="10px"
      width="80vw"
      transform="translateX(-50%)"
      zIndex="2"
      pointerEvents="all"
    >
      <iframe
        scrolling="no"
        frameBorder="0"
        src="https://s.tradingview.com/embed-widget/tickers/?locale=en#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22Bitcoin%22%2C%22proName%22%3A%22BINANCE%3ABTCUSDT%22%7D%2C%7B%22description%22%3A%22Binance%20Coin%22%2C%22proName%22%3A%22BINANCE%3ABNBUSDT%22%7D%2C%7B%22description%22%3A%22Polygon%22%2C%22proName%22%3A%22KUCOIN%3AMATICUSDT%22%7D%2C%7B%22description%22%3A%22Fantom%22%2C%22proName%22%3A%22BINANCE%3AFTMUSDT%22%7D%2C%7B%22description%22%3A%22Cake%22%2C%22proName%22%3A%22BINANCE%3ACAKEUSDT%22%7D%2C%7B%22description%22%3A%22Bitcoin%20Dominance%22%2C%22proName%22%3A%22CRYPTOCAP%3ABTC.D%22%7D%2C%7B%22description%22%3A%22Total%20Crypto%20Market%20Cap%22%2C%22proName%22%3A%22CRYPTOCAP%3ATOTAL%22%7D%5D%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22showSymbolLogo%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A72%2C%22utm_source%22%3A%22www.babylonia.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22tickers%22%7D"
        style={{
          boxSizing: "border-box",
          height: "72px",
          width: "100%",
        }}
      />
    </Box>
  );
};
export default TradingWidget;
