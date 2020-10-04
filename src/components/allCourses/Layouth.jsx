import React from "react";
import Particles from "../common/Particles";
import HeaderHero from "../theme/HeaderHero";
import Footer from "../theme/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Particles />
      <HeaderHero />
      {children}
      <Footer />
    </>
  );
}
