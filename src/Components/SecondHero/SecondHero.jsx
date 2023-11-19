import React from "react";
import "./SecondHero.css";
import Heder_img from "../../Assets/header.jpg";
import { motion } from "framer-motion";

function SecondHero(props) {
  return (
    <div className="w-full flex second-hero">
      <div className="w-1/2">
        <motion.h1
          className="mt-28 ml-10 font-bold text-[#0e2e50] text-5xl"
          initial={{
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
          }}
        >
          {props.name}
        </motion.h1>
        <motion.div
          className="flex mt-7 ml-10 gap-5 text-normal font-medium"
          initial={{
            y: 70,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
        >
          <span className="text-main cursor-pointer menu-side uppercase">
            Home
          </span>
          <span className="text-main cursor-pointer menu-side uppercase">
            Page
          </span>
          <span className="text-[#888] uppercase">{props.link}</span>
        </motion.div>
      </div>
      <div className="w-1/2 absolute left-1/2 -z-10 top-0 header-img ">
        <img src={Heder_img} alt="Heder" />

      </div>
    </div>
  );
}

export default SecondHero;
