import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import SearchBox from "../../Components/SearchBox/SearchBox";
import PropertyTypes from "../../Components/PropertyTypes/PropertyTypes";
import PropertyListing from "../../Components/PropertyListing/PropertyListing";
import PropertyAgents from "../../Components/PropertyAgents/PropertyAgents";
import SecondHero from "../../Components/SecondHero/SecondHero";

function Property() {
  return (
    <>
      <NavBar />
      <SecondHero name="Properties" link="PROPERTY"/>
      <SearchBox />
      <PropertyTypes/>
      <PropertyListing/>
      <PropertyAgents/>
      <Footer />
    </>
  );
}

export default Property;
