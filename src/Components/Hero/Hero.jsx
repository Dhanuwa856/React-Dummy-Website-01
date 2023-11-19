import React from "react";
import "./Hero.css";
import carousel_1 from "../../Assets/carousel-1.jpg";
import carousel_2 from "../../Assets/carousel-2.jpg";
import { motion } from "framer-motion";

function Hero(props) {
  return (
    <>
      <div className="hero w-full flex flex-wrap-reverse justify-between">
        <div className="hero-left mt-52 w-1/2 pl-10">
          <motion.h1
            className="text-[#0e2e50] text-5xl font-bold leading-tight"
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
            Find A <span className="text-main">Perfect Home</span> To <br />{" "}
            Live With Your Family
          </motion.h1>
          <motion.p
            className="mt-5 text-[#444] text-md"
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
              delay: 0.5,
              duration: 1,
            }}
          >
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </motion.p>
          <motion.button
            className="bg-main text-white mt-5 font-medium px-10 py-4 text-base rounded-lg hover:text-main hover:bg-white hover:border hover:border-solid border-main"
            initial={{
              y: 70,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            Get Started
          </motion.button>
        </div>
        <div className="hero-right absolute top-0 left-1/2 w-1/2 -z-10 overflow-hidden">
          <motion.div
            className="carousel relative flex w-full object-cover"
            initial={{
              x: 0,
            }}
            animate={{
              x: -672,
            }}
            transition={{
              delay: 10,
              duration: 4,
              repeat: Infinity,
              repeatDelay: 7,
              repeatType: "reverse",
              
            }}
           
          >
            <motion.img src={carousel_1} alt="" className="w-full" />
            <motion.img src={carousel_2} alt="" className="w-full" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
