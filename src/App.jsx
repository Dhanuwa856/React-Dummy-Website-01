import "./App.css";
import ClientSay from "./Components/ClientSay/ClientSay";
import ContactAgent from "./Components/ContactAgent/ContactAgent";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import PerfectProperty from "./Components/PerfectProperty/PerfectProperty";
import PropertyAgents from "./Components/PropertyAgents/PropertyAgents";
import PropertyListing from "./Components/PropertyListing/PropertyListing";
import PropertyTypes from "./Components/PropertyTypes/PropertyTypes";
import SearchBox from "./Components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <SearchBox />
      <PropertyTypes />
      <PerfectProperty />
      <PropertyListing />
      <ContactAgent />
      <PropertyAgents />
      <ClientSay />
      <Footer />
    </>
  );
}

export default App;
