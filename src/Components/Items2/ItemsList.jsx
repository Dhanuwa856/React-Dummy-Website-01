import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import "./ItemsList.css";
import { motion } from "framer-motion";

function ItemsList(props) {
  return (
    <motion.div
      className="listing-box w-[100%] shadow-xl pb-3 rounded-md cursor-pointer hover01"
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
      <div className="listing-img  relative">
        <figure>
          <img
            src={props.image}
            alt={props.name}
            className="w-full rounded-t-md  overflow-hidden"
          />
        </figure>
        <p className="tag absolute top-5 left-3 bg-main text-white rounded px-3 py-1">
          {props.tag}
        </p>
        <h6 className="category absolute top-[90%] left-5 text-main font-normal bg-white rounded px-3 py-1">
          {props.category}
        </h6>
      </div>
      <h3 className="text-main mt-5 ml-3 font-bold text-xl">${props.price}</h3>
      <p className="text-[#0e2e50] font-medium text-xl w-[95%] m-auto mt-3 item-text">
        {props.name}
      </p>
      <p className="text-[#444] font-light w-[95%] m-auto mt-2">
        <span className="text-main mr-2">
          <FontAwesomeIcon icon={faLocationDot} />
        </span>{" "}
        123 Street, New York, USA
      </p>
      <div className="flex mt-5 justify-around list-icons items-center w-[90%] mx-auto">
        <p className="font-light text-sm side-line">
          {" "}
          <span className="text-main mr-3 text-sm">
            <FontAwesomeIcon icon={faRulerCombined} />
          </span>
          1000 sqft
        </p>
        <p className="font-light text-sm side-line">
          {" "}
          <span className="text-main mr-3 text-sm">
            <FontAwesomeIcon icon={faBed} />
          </span>
          3 Bed
        </p>
        <p className="font-light text-sm">
          {" "}
          <span className="text-main mr-3 text-sm">
            <FontAwesomeIcon icon={faBath} />
          </span>
          2 Bath
        </p>
      </div>
    </motion.div>
  );
}

export default ItemsList;
