import React from "react";
import Items from "../Items/Items";
import Property_box_items from "../../Assets/PropertyBoxItems";
import "./PropertyTypes.css";
import { motion } from "framer-motion";

function PropertyTypes() {
  return (
    <div className="property-types mt-28">
      <motion.h1
        className="text-center text-4xl font-bold text-[#0e2e50]"
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
        {" "}
        Property Types
      </motion.h1>
      <motion.p
        className="mt-5 text-center w-1/2 m-auto text-[#444] text-sm"
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
        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
        lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
        dolor duo.
      </motion.p>
      <div className="property-boxes mt-10 w-[80%] grid justify-center m-auto gap-7">
        {Property_box_items.map((item, i) => {
          return (
            <Items key={i} name={item.name} image={item.image} id={item.id} />
          );
        })}
      </div>
    </div>
  );
}

export default PropertyTypes;
