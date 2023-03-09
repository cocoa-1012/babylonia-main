import { NextComponentType } from "next";

import Image from "src/components/common/Image";

import roadmap from "public/images/slides/SLIDES_ROADMAP_wotitle-06032023_2500x1000.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const Roadmap: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Image
      width="1600px"
      height="1600px"
      className={grayscaleMode === "gray" ? "grayscale" : ""}
      src={roadmap}
      layout="responsive"
      alt="betting"
    />
  );
};

export default Roadmap;
