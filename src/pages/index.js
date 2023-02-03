import React from "react";
import Banner from "../components/Banner.jsx";
import Products from "@/components/Products.jsx";
import About from "@/components/About.jsx";
import Main from "@/components/Main.jsx";
import AboutProducts from "@/components/AboutProducts.jsx";
import Footer from "@/components/Footer.jsx";
import Contact from "@/components/Contact.jsx";
export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <About />
      <Main />
      <Products />
      <AboutProducts />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
