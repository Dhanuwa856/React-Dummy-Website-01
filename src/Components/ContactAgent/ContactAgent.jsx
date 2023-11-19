import React from "react";
import "./ContactAgent.css";
import Agent from "../../Assets/call-to-action.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function ContactAgent() {
  return (
    <div className="mt-32 w-[85%] m-auto">
      <motion.div
        className="agent-box-bg rounded-md"
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
        <div className="agent-box bg-white rounded-md flex gap-10">
          <div className="agent-left w-1/2 ">
            <img src={Agent} alt="" className="w-full rounded-md" />
          </div>
          <div className="agent-right w-1/2">
            <h4 className="mt-20 font-semibold text-4xl text-[#0e2e50] agent-box-h4" >
              Contact With Our <br /> Certified Agent
            </h4>
            <p className="mt-5 text-[#444] text-sm">
              Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd
              vero ipsum sit sit diam justo sed vero dolor duo.
            </p>
            <div className="flex gap-12 mt-5 agent-box-btns">
              <button className="bg-main text-white rounded-md p-4 font-medium agent-box-btn">
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> Make A Call
              </button>
              <button className="bg-[#0e2e50] text-white font-medium p-4 rounded-md agent-box-btn">
                <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                Get Appoinment
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactAgent;
