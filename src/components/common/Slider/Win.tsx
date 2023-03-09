import { NextComponentType } from "next";

import Image from "src/components/common/Image";

import win from "public/images/slides/Win.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const Win: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  return (
    <Image
      className={grayscaleMode === "gray" ? "grayscale" : ""}
      src={win}
      layout="responsive"
      alt="win"
    />
  );
};

export default Win;
