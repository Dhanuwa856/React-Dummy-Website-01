import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import Img_1 from "../../Assets/property-1.jpg";
import Img_2 from "../../Assets/property-2.jpg";
import Img_3 from "../../Assets/property-3.jpg";
import Img_4 from "../../Assets/property-4.jpg";
import Img_5 from "../../Assets/property-5.jpg";
import Img_6 from "../../Assets/property-6.jpg";
function Footer() {
  return (
    <div className="mt-28 bg-[#0e2e50] w-full">
      <div className="w-[85%] mx-auto flex gap-6 footer-grid">
        <div className="pt-20 w-1/4 footer-item">
          <h1 className="font-bold text-white text-xl">Get In Touch</h1>
          <p className="mt-3 text-[#aaa] mb-2">
            <span className="mr-3">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            123 Street, New York, USA
          </p>
          <p className="mt-3 text-[#aaa] mb-2">
            <span className="mr-3">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            +012 345 67890
          </p>
          <p className="mt-3 text-[#aaa] mb-2">
            <span className="mr-3">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            info@example.com
          </p>
          <div className="flex text-center text-white gap-2 mt-3 so-icon">
            <span>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span>
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span>
              <FontAwesomeIcon icon={faYoutube} />
            </span>
            <span>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </div>
        </div>
        <div className="pt-20 w-1/4 footer-item">
          <div className=" ">
            <h1 className="font-bold text-white text-xl">Quick Links</h1>
            <ul className="mt-3 ul-eka">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terme & Condition</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-20 w-1/4 footer-item">
          <div>
            <h1 className="font-bold text-white text-xl">Photo Gallery</h1>
            <div className="grid gap-3 w-full mt-3 grid-eka">
              <img
                src={Img_1}
                alt=""
                className="w-[80px] rounded-md border-white border-[3px] cursor-pointer"
              />
              <img
                src={Img_2}
                alt=""
                className="w-[80px] rounded-md border-white border-[3px] cursor-pointer"
              />
              <img
                src={Img_3}
                alt=""
                className="w-[80px] rounded-md border-white border-[3px] cursor-pointer"
              />
              <img
                src={Img_4}
                alt=""
                className="w-[80px] rounded-md border-white border-[3px] cursor-pointer"
              />
              <img
                src={Img_5}
                alt=""
                className="w-[80px] rounded-md border-white border-[3px] cursor-pointer"
              />
              <img
                src={Img_6}
                alt=""
                className="w-[80px] rounded-md border-white border-[3px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="pt-20 w-1/4 footer-item">
          <div>
            <h1 className="font-bold text-white text-xl">Newsletter</h1>
            <p className="w-full text-[#aaa] text-sm mt-3">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <form action="#" className="flex relative">
              <input
                type="email"
                placeholder="Your Email"
                className="mt-3 flex-1 input-eka rounded-md"
                required
              />
              <button className="absolute left-[68%] top-[58%] btn-eka bg-main text-white p-3 rounded-md">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr className="w-[85%] m-auto !bg-[#aaa] mt-3 h-[0.5px]" />
      <div className="w-[85%] mx-auto flex flex-wrap justify-between text-white text-sm mt-2 pb-3">
        <p>
          © Makaan , All Right Reserved. Designed By <a href="https://www.upwork.com/freelancers/~01386d08f6baa0d69c"><span className="underline cursor-pointer">Dhanushka Rathnayaka</span></a>.
        </p>
        <div className="flex gap-7">
          <span className="side-bar cursor-pointer">Home</span>
          <span className="side-bar cursor-pointer">Cookies</span>
          <span className="side-bar cursor-pointer">Help</span>
          <span className="cursor-pointer">FQAs</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
