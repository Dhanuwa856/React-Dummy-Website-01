import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import SearchBox from "../../Components/SearchBox/SearchBox";
import ClientSay from "../../Components/ClientSay/ClientSay";
import SecondHero from "../../Components/SecondHero/SecondHero";

function Testimonial() {
  return (
    <>
      <NavBar />
      <SecondHero name="Testimonial" link="Testimonial" />
      <SearchBox />
      <ClientSay />
      <Footer />
    </>
  );
}

export default Testimonial;
