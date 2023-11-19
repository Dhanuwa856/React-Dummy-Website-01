import React from "react";
import { Carousel } from "flowbite-react";
import "./ClientSay.css";
import Men_1 from "../../Assets/testimonial-1.jpg";
import Men_2 from "../../Assets/testimonial-2.jpg";
import Men_3 from "../../Assets/testimonial-3.jpg";
import Men_4 from "../../Assets/testimonial-4.jpg";
import { motion } from "framer-motion";

function ClientSay() {
  return (
    <div className="mt-36">
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
        Our Clients Say!
      </motion.h1>
      <motion.p
        className="text-center w-1/2 mx-auto mt-5 text-[#444] text-sm"
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
      <motion.div
        className="h-[50vh] sm:h-64 xl:h-80 2xl:h-96 w-[85%] mx-auto mt-9 carousel-main"
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
        <Carousel>
          <div className="flex gap-4 justify-center">
            <div className="w-[45%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_1} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[45%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_2} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <div className="w-[45%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_3} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[45%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_4} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <div className="w-[45%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_2} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[45%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_3} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
}

export default ClientSay;
