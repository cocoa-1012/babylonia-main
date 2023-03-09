import { NextComponentType } from "next";

import Image from "src/components/common/Image";

import tokenomics from "public/images/slides/SLIDES_TOKEN_12_1x1_withTitle.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const Tokenomics: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  return (
    <Image
      className={grayscaleMode === "gray" ? "grayscale" : ""}
      src={tokenomics}
      layout="responsive"
      alt="betting"
    />
  );
};

export default Tokenomics;
