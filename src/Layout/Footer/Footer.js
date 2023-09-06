import React from "react";
import classes from "./Footer.module.scss";
import Logo from '../../images/logo.svg'
import IconFacebook from '../../images/icon-facebook.svg'
import IconInstagram from '../../images/icon-instagram.svg'
import IconTwitter from '../../images/icon-twitter.svg'
import IconPinterest from '../../images/icon-pinterest.svg'

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <img src={Logo} alt="Logo" className={classes.footer__logo}/>
        <div className={classes.footer__nav}>
            <p className={classes['footer__nav-item']}>About</p>
            <p className={classes['footer__nav-item']}>Services</p>
            <p className={classes['footer__nav-item']}>Projects</p>
        </div>
        <div className={classes.footer__social}>
    <img src={IconFacebook} alt="Facebook Icon"  className={classes.footer__icon} />
    <img src={IconInstagram} alt="Instagram Icon"  className={classes.footer__icon} />
    <img src={IconTwitter} alt="Twitter Icon"  className={classes.footer__icon} />
    <img src={IconPinterest} alt="Pinterest Icon"  className={classes.footer__icon} />
        </div>
      <p className={classes.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/jalobig" rel="noreferrer" target="_blank">
          Jason Alexis
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
