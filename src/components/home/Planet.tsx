import { Box } from "@chakra-ui/react";
import type { NextComponentType } from "next";

import Image from "src/components/common/Image";

import useAppState, { ACTIONS } from "src/hooks/useAppState";

import planet from "public/images/planet.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const Planet: NextComponentType = () => {
  const { dispatch } = useAppState();
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Box position="fixed" top={0} right={0}>
      <Image
        className={grayscaleMode === "gray" ? "grayscale" : ""}
        src={planet}
        alt="planet"
        onLoad={() => dispatch({ type: ACTIONS.INCREMENT_LOADED_IMAGES })}
      />
    </Box>
  );
};

export default Planet;
