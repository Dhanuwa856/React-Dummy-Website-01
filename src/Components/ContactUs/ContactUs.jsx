import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./ContactUs.css";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <div className="w-[85%] mx-auto mt-28">
      <motion.h1
        className="text-center text-[#0e2e50] font-semibold text-4xl"
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
        Contact Us
      </motion.h1>
      <motion.p
        className="text-center w-1/2 mx-auto text-sm mt-3 text-[#444]"
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
      <div className="flex gap-8 mx-auto contact-us-boxes">
        <motion.div
          className="box-bg mt-6 rounded-md"
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
          <div className="box rounded-md">
            <div className="flex gap-8">
              <div className="icon-border flex items-center gap-8">
                <span className="icon-b">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-main "
                  />
                </span>
                <p className="text-[#444] font-medium">
                  123 Street, New York, USA
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="box-bg mt-6 rounded-md"
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
          <div className="box rounded-md">
            <div className="flex gap-8">
              <div className="icon-border flex items-center gap-8">
                <span className="icon-b">
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    className="text-main "
                  />
                </span>
                <p className="text-[#444] font-medium">info@example.com</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="box-bg mt-6 rounded-md"
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
          <div className="box rounded-md">
            <div className="flex gap-8">
              <div className="icon-border flex items-center gap-8">
                <span className="icon-b">
                  <FontAwesomeIcon icon={faPhone} className="text-main " />
                </span>
                <p className="text-[#444] font-medium">+012 345 6789</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-10 flex w-[90%] mx-auto gap-8 map-eka">
        <motion.div
          className="w-1/2 map"
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29041.75772857223!2d80.79329275939664!3d7.151146888331546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae37d16ba5a3d99%3A0xcc38ab6d3fbe8a5f!2sRikillagaskada!5e0!3m2!1ssi!2slk!4v1700131074687!5m2!1ssi!2slk"
            className="w-full h-[70vh] rounded-md shadow-lg"
          ></iframe>
        </motion.div>
        <motion.div
          className="w-1/2 message-boxes"
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
          <p className="w-full text-[#444] text-sm font-normal">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.{" "}
            <span className="text-main cursor-pointer">Download Now</span>.
          </p>
          <div className="w-full">
            <div className="flex gap-4 mt-5 messbox-input">
              <input
                type="text"
                placeholder="Your Name"
                className="w-1/2 h-[50px] rounded-md border-[#ccc] text-[#aaa]"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-1/2 h-[50px] rounded-md border-[#ccc] text-[#aaa]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full h-[50px] rounded-md mt-5 border-[#ccc] text-[#aaa]"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="w-full mt-5 h-[23vh] rounded-md border-[#ccc] text-[#aaa]"
            ></textarea>
            <button
              className="mt-5 w-full bg-main h-[50px] text-white rounded-md"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactUs;
