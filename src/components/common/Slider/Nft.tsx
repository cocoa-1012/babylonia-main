import { NextComponentType } from "next";

import Image from "src/components/common/Image";

import nft from "public/images/slides/SLIDES_NFT_002_4x3_withLogo.jpg";
import { useAppSelector, useAppDispatch } from "@hooks";

const NFT: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Image
      className={grayscaleMode === "gray" ? "grayscale" : ""}
      src={nft}
      layout="responsive"
      alt="nft"
    />
  );
};

export default NFT;
