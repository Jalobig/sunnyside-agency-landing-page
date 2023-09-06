import React from "react";
import classes from "./Hero.module.scss";
import IconArrowDown from "../../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h1 className={classes.hero__heading}>We are creatives</h1>
      <img
        src={IconArrowDown}
        alt="Icon Arrow Down"
        className={classes.hero__arrow}
      />
    </div>
  );
};

export default Hero;
