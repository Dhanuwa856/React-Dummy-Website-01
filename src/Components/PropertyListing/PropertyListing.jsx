import React from "react";
import "./PropertyListing.css";
import Property_list from "../../Assets/PropertyList";
import ItemsList from "../Items2/ItemsList";
import { motion } from "framer-motion";

function PropertyListing() {
  return (
    <div className="mt-20 w-[90%] m-auto">
      <motion.h1
        className="text-[#0e2e50] font-bold text-4xl"
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
        Property Listing
      </motion.h1>
      <motion.div
        className="flex justify-between mt-5"
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
        <p className="w-1/2 text-[#444] text-sm font-normal">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
        </p>
        <div className="flex gap-2 listing-btn ">
          <button className="border border-solid rounded border-main px-3 hover:bg-main hover:text-white outline-none">
            Featured
          </button>
          <button className="border border-solid rounded border-main px-3 hover:bg-main hover:text-white outline-none">
            For Sell
          </button>
          <button className="border border-solid rounded border-main px-3 hover:bg-main hover:text-white outline-none">
            For Rent
          </button>
        </div>
      </motion.div>
      <div className="listing-boxes mt-10 grid gap-9">
        {" "}
        {Property_list.map((item, i) => {
          return (
            <ItemsList
              key={i}
              name={item.name}
              image={item.image}
              id={item.id}
              category={item.category}
              tag={item.tag}
              price={item.price}
            />
          );
        })}
      </div>
      <motion.button
        className="mt-10 m-auto block text-white bg-main px-12 py-4 rounded-md font-normal hover:bg-[#00b97f]"
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
        Browse More Property
      </motion.button>
    </div>
  );
}

export default PropertyListing;
