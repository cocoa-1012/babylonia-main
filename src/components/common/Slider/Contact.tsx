import { NextComponentType } from "next";

import Image from "src/components/common/Image";

import contact from "public/images/slides/SLIDES_CONTACT_011_1600x1400_withLogo.png";
import { useAppSelector, useAppDispatch } from "@hooks";

const Contact: NextComponentType = () => {
  const grayscaleMode = useAppSelector((state: any) => state.grayscale.value);

  return (
    <Image
      className={grayscaleMode === "gray" ? "grayscale" : ""}
      src={contact}
      layout="responsive"
      alt="betting"
    />
  );
};

export default Contact;
