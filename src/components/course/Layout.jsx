import React from "react";
import Particles from "../common/Particles";
import Footer from "../theme/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Particles />
      {children}
      <Footer />
    </>
  );
}
