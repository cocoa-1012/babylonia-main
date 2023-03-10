import { NextComponentType } from "next";

import Image from "src/components/common/Image";

import betting from "public/images/slides/SLIDES_BETTING_011_1600x1400_withLogo.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const Betting: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);
  return (
    <Image
      className={grayscaleMode === "gray" ? "grayscale" : ""}
      src={betting}
      layout="responsive"
      alt="betting"
    />
  );
};

export default Betting;
