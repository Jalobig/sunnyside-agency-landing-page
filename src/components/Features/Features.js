import React from "react";
import ClearButton from "../Buttons/ClearButton/ClearButton";
import classes from "./Features.module.scss";
import useMediaQuery from "../../hooks/useMediaquery";
import ImgTransform from "../../images/desktop/image-transform.jpg";
import ImgTransformMobile from "../../images/mobile/image-transform.jpg";
import ImgStandOut from "../../images/desktop/image-stand-out.jpg";
import ImgStandOutMobile from "../../images/mobile/image-stand-out.jpg";
import ImgGraphicDesign from "../../images/desktop/image-graphic-design.jpg";
import ImgGraphicDesignMobile from "../../images/mobile/image-graphic-design.jpg";
import ImgPhotography from "../../images/desktop/image-photography.jpg";
import ImgPhotographyMobile from "../../images/mobile/image-photography.jpg";

const Features = () => {
  const media = useMediaQuery("only screen and (max-width:700px)");
  return (
    <div className={classes.features}>
      <div className={classes.features__item}>
        <div className={classes["features__item--1"]}>
          <h2 className={classes.features__heading}>Transform your brand</h2>
          <p className={classes.features__text}>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <ClearButton color="#fad400">Learn More</ClearButton>
        </div>
      </div>
      <div
        className={`${classes.features__item} ${classes["features__first-mobile"]}`}
      >
        <img
          src={media ? ImgTransformMobile : ImgTransform}
          alt="Transform illustration"
          className={classes.features__illustration}
        />
      </div>
      <div className={classes.features__item}>
        <img
          src={media ? ImgStandOutMobile : ImgStandOut}
          alt="Stand out illustration"
          className={classes.features__illustration}
        />
      </div>
      <div className={classes.features__item}>
        <div className={classes["features__item--1"]}>
          <h2 className={classes.features__heading}>
            Stand out to the right audience
          </h2>
          <p className={classes.features__text}>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <ClearButton color="#fe7867">Learn More</ClearButton>
        </div>
      </div>
      <div className={`${classes.features__item} ${classes.features__green}`}>
        <div className={classes["features__item--2"]}>
          <img
            src={media ? ImgGraphicDesignMobile : ImgGraphicDesign}
            alt="Graphic design Illustration"
            className={classes.features__bg}
          />
          <div className={classes.features__group}>
            <h3 className={classes["features__heading--3"]}>Graphic Design</h3>
            <p className={classes["features__text--2"]}>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
      </div>
      <div className={`${classes.features__item} ${classes.features__blue}`}>
        <div className={classes["features__item--2"]}>
          <img
            src={media ? ImgPhotographyMobile : ImgPhotography}
            alt="Photography Illustration"
            className={classes.features__bg}
          />
          <div className={classes.features__group}>
            <h3 className={classes["features__heading--3"]}>Photography</h3>
            <p className={classes["features__text--2"]}>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
