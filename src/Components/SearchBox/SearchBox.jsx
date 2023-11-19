import React from "react";
import "./SearchBox.css";
import { motion } from "framer-motion";

function SearchBox() {
  return (
    <motion.div className="search-box mt-20 bg-main w-full"  initial={{
      y: 70,
      opacity: 0,
    }}
    whileInView={{
      y: 0,
      opacity: 1,
    }}
    viewport={{ once: true }}
    transition={{
      delay: 0.4,
      duration: 1,
    }}>
      <div className="input-boxes w-[80%] m-auto flex justify-center items-center gap-3 py-10">
      <input type="text" placeholder="Search Keyword" />
      <select name="" id="">
        <option value="1">Property Type</option>
        <option value="2">Property Type 2</option>
        <option value="3">Property Type 3</option>
        <option value="4">Property Type 4</option>
      </select>
      <select name="" id="">
        <option value="1">Location</option>
        <option value="2">Location 2</option>
        <option value="3">Location 3</option>
        <option value="4">Location 4</option>
      </select>
      <button className="py-3">Search</button>
      </div>
    </motion.div>
  );
}

export default SearchBox;
