import React from "react";
import "./Items.css";
import { motion } from "framer-motion";

function Items(props) {
  return (
    <motion.div
      className="property-box-bg"
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
        delay: 0.7,
        duration: 1,
      }}
    >
      <div className="property-box">
        <div className="img-border hover-color">
          <img src={props.image} alt={props.name} />
        </div>
        <h5 className="text-[#0e2e50] font-semibold text-normal mt-3 hover-color">
          {props.name}
        </h5>
        <p className="text-main font-extralight mt-1 hover-color">
          12{props.id} Properties
        </p>
      </div>
    </motion.div>
  );
}

export default Items;
