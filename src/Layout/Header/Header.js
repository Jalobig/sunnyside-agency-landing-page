import React from "react";
import classes from "./Header.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ImageHeaderDesktop from "../../images/desktop/image-header.jpg";
import ImageHeaderMobile from "../../images/mobile/image-header.jpg";
import useMediaQuery from "../../hooks/useMediaquery";

const Header = () => {
  const media = useMediaQuery("only screen and (max-width:700px)");
  return (
    <header className={classes.header}>
      <img
        src={media ? ImageHeaderMobile : ImageHeaderDesktop}
        alt="Background for Header"
        className={classes.header__bg}
      />
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
