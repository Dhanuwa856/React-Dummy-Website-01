import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import SearchBox from "../../Components/SearchBox/SearchBox";
import ContactUs from "../../Components/ContactUs/ContactUs";
import SecondHero from "../../Components/SecondHero/SecondHero";

function Contact() {
  return (
    <>
      <NavBar />
      <SecondHero name="Contact Us" link="contact" />
      <SearchBox />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Contact;
