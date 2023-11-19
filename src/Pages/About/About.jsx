import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import SearchBox from "../../Components/SearchBox/SearchBox";
import PerfectProperty from "../../Components/PerfectProperty/PerfectProperty";
import ContactAgent from "../../Components/ContactAgent/ContactAgent";
import PropertyAgents from "../../Components/PropertyAgents/PropertyAgents";
import SecondHero from "../../Components/SecondHero/SecondHero";

function About() {
  return (
    <>
      <NavBar />
      <SecondHero name="About Us" link="About"/>
      <SearchBox />
      <PerfectProperty />
      <ContactAgent />
      <PropertyAgents />
      <Footer />
    </>
  );
}

export default About;
