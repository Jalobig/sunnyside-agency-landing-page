import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../images/logo.svg";
import IconHamburger from "../../images/icon-hamburger.svg";
import CTAButton from "../Buttons/CTAButton/CTAButton";
import useMediaQuery from "../../hooks/useMediaquery";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const media = useMediaQuery("only screen and (max-width:700px");
  const menuHandler = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <div className={classes.navbar}>
      <img src={Logo} alt="logo" className={classes.navbar__logo} />
      {media && <img src={IconHamburger} alt="Icon for menu" className={classes.navbar__menu} onClick={menuHandler} />}
      {(!media || isActive) && (
        <ul className={classes.navbar__nav}>
          <li className={classes["navbar__nav--item"]}>About</li>
          <li className={classes["navbar__nav--item"]}>Services</li>
          <li className={classes["navbar__nav--item"]}>Projects</li>
          <li className={classes["navbar__nav--item"]}>
            <CTAButton>contact</CTAButton>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
