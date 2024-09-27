import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import footerData from "./data";

const Footer = () => {
  return (
    <div className="font-roboto2 mt-20">
      <div className=" grid grid-cols-2 gap-4 items-center  md:grid-cols-4 bg-primary p-4 text-slate-300 mt-4 mx-auto pl-10 font-poppins ">
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Event Pal</h6>
            {footerData.eventrybe.map((item) => (
              <Link to={item.link} key={item.text}>
                <li className="text-[0.7em]">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Services</h6>

            {footerData.services.map((item) => (
              <Link to={item.link} key={item.text}>
                <li className="text-[0.6em]">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Help</h6>

            {footerData.help.map((item) => (
              <Link to={item.link} key={item.text}>
                <li className="text-[0.7em]">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Contact Us</h6>

            {footerData.contactUs.map((item) => (
              <Link to={item.link} key={item.text}>
                <li className="text-[0.7em] ">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#563c5c] flex justify-around p-2 items-center font-poppins">
        <p className="text-[0.7em] text-slate-300">
          2024. All Rights Reserved, Eventrybe Limited
        </p>
        <div className="flex gap-3">
          <a href="https://facebook.com"><BiLogoFacebook className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          </a>
         <a href="https://twitter.com"><RiTwitterXLine className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
         </a> 
          <a href="https://instagram.com"><FaInstagram className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          </a>
          <a href="mailto:eventrybeteam@gmai.com">
          <TiSocialGooglePlus className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
