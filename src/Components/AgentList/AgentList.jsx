import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./AgentList.css";
import { motion } from "framer-motion";

function AgentList(props) {
  return (
    <motion.div
      className="agent-list-box w-1/5 bg-white shadow-xl pb-5 rounded-md m-auto mt-5"
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
      <div className="agent-list-img w-full relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-full rounded-t-md"
        />
        <div className="absolute top-[92%] flex justify-center items-center left-1/2 social-icons gap-5 text-main font-bold text-lg">
          <span className="shadow-lg">
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          <span className="shadow-lg">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span className="shadow-lg">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </div>
      </div>
      <h2 className="mt-8 text-[#0e2e50] font-semibold text-xl text-center">
        {props.name}
      </h2>
      <p className="mt-1 text-sm text-center">{props.position}</p>
    </motion.div>
  );
}

export default AgentList;
