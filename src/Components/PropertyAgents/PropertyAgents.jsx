import React from "react";
import Agents_list from "../../Assets/Agents";
import AgentList from "../AgentList/AgentList";
import { motion } from "framer-motion";

function PropertyAgents() {
  return (
    <div className="mt-20">
      <motion.h1
        className="text-center font-semibold text-4xl text-[#0e2e50]"
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
        Property Agents
      </motion.h1>
      <motion.p
        className="text-center w-1/2 m-auto mt-4 text-[#444] font-normal text-sm"
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
      <div className="agent-list-boxes w-[85%] m-auto mt-6 flex gap-3">
        {Agents_list.map((item, i) => {
          return (
            <AgentList
              key={i}
              name={item.Name}
              image={item.image}
              position={item.position}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PropertyAgents;
