import React from "react";
import About from "../../Assets/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function PerfectProperty() {
  return (
    <div className="perfect-property mt-40 w-[90%] m-auto flex flex-wrap">
      <div className="perfect-property-left w-1/2">
        <motion.img
          src={About}
          alt="about png"
          className="w-[80%]"
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
        />
      </div>
      <div className="perfect-property-right w-1/2">
        <motion.h1
          className="text-[#0e2e50] font-semibold text-[45px] mt-5 leading-tight"
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
          #1 Place To Find The <br /> Perfect Property
        </motion.h1>
        <motion.p
          className="text-[#444] text-base mt-3 font-normal p-text"
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
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </motion.p>
        <div className="mt-5 perfect-property-right-list">
          <motion.p
            className="mb-4 text-[#444] font-normal"
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
            <span className="text-main font-bold text-[20px] mr-3 ">
              <FontAwesomeIcon icon={faCheck} />
            </span>{" "}
            Tempor erat elitr rebum at clita
          </motion.p>
          <motion.p
            className="mb-4 text-[#444] font-normal"
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
            <span className="text-main font-bold text-[20px] mr-3 ">
              <FontAwesomeIcon icon={faCheck} />
            </span>{" "}
            Aliqu diam amet diam et eos
          </motion.p>
          <motion.p
            className="mb-4 text-[#444] font-normal"
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
            <span className="text-main font-bold text-[20px] mr-3 ">
              <FontAwesomeIcon icon={faCheck} />
            </span>{" "}
            Clita duo justo magn
          </motion.p>
        </div>
        <motion.button
          className="bg-main text-white font-bold px-10 py-4 rounded outline-none hover:bg-[#00b97f]"
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
          Read More
        </motion.button>
      </div>
    </div>
  );
}

export default PerfectProperty;
