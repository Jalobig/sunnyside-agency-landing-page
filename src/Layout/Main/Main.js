import React from "react";
import classes from "./Main.module.scss";
import Features from "../../components/Features/Features";
import Testimonials from "../../components/Testimonials/Testimonials";
import Display from "../../components/Display/Display";

const Main = () => {
  return (
    <main className={classes.main}>
      <Features />
      <Testimonials />
      <Display />
    </main>
  );
};

export default Main;
