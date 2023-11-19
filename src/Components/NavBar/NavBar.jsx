import React, { useState } from "react";
import Deal_icon from "../../Assets/icon-deal.png";
import MenuLinks from "../MenuLinks/MenuLinks";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const [openMenu,setOpenMenu]= useState(false);

  return (
    <div className={fix ? " nav-bar fixed" : "nav-bar"}>
      <Link to="/">
        <div className="nav-logo flex items-center gap-3">
          <img
            src={Deal_icon}
            alt="Deal icon(logo)"
            className="w-12 border-dashed border-main rounded-full border-[1px] p-2"
          />
          <h2 className="text-main text-5xl font-bold site-name">Makaan</h2>
        </div>
      </Link>
      <div className="nav-menu  flex gap-9 item-center">  
        <div className={openMenu ? "nav-menu-links open":"nav-menu-links close"}>
          <MenuLinks menuname="HOME" url="/" />
          <MenuLinks menuname="ABOUT" url="/about" />
          <MenuLinks menuname="PROPERTY" url="/property" />
          <MenuLinks menuname="PAGES" url="/pages" />
          <MenuLinks menuname="CONTACT" url="/contact" />
        </div>
        <div className={openMenu ? "open-menu close":"open-menu open"}>
          <span className="text-main text-4xl" onClick={()=>{
            setOpenMenu(!openMenu);
          }}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
        <div className={openMenu ? "close-menu open":"close-menu close"}>
          <span className="text-main text-4xl" onClick={()=>{
            setOpenMenu(!openMenu);
          }}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>

        <div className="nav-button">
          <Link to="/">
            <button className="bg-main px-6 py-2 rounded-lg font-medium hover:bg-[#00b99f]">
              Add Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
