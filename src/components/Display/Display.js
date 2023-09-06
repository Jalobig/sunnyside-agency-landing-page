import React from "react";
import classes from "./Display.module.scss";
import ImgMilk from "../../images/desktop/image-gallery-milkbottles.jpg";
import ImgMilkMobile from "../../images/mobile/image-gallery-milkbottles.jpg";
import ImgOrange from "../../images/desktop/image-gallery-orange.jpg";
import ImgOrangeMobile from "../../images/mobile/image-gallery-orange.jpg";
import ImgCone from "../../images/desktop/image-gallery-cone.jpg";
import ImgConeMobile from "../../images/mobile/image-gallery-cone.jpg";
import ImgSugar from "../../images/desktop/image-gallery-sugarcubes.jpg";
import ImgSugarMobile from "../../images/mobile/image-gallery-sugar-cubes.jpg";
import useMediaQuery from "../../hooks/useMediaquery";

const Display = () => {
  const media = useMediaQuery("only screen and (max-width:700px)");

  return (
    <div className={classes.display}>
      <img
        src={media ? ImgMilkMobile : ImgMilk}
        alt="Illustration 1"
        className={classes.display__img}
      />
      <img
        src={media ? ImgOrangeMobile : ImgOrange}
        alt="Illustration 2"
        className={classes.display__img}
      />
      <img
        src={media ? ImgConeMobile : ImgCone}
        alt="Illustration 3"
        className={classes.display__img}
      />
      <img
        src={media ? ImgSugarMobile : ImgSugar}
        alt="Illustration 4"
        className={classes.display__img}
      />
    </div>
  );
};

export default Display;
