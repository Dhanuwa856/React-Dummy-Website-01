import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function MenuLinks(props) {

 
  return (
    <>
      <div className="menu-links">
        <NavLink
          to={props.url}
          className="text-base font-medium text-[#333] hover:text-main cursor-pointer transition"
        >
          {props.menuname}
        </NavLink>
      </div>
    </>
  );
}

export default MenuLinks;
