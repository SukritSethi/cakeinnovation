import React from "react";
import bgpic from "./background.jpg";
import logo from "./logo.png";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { SiSwiggy, SiZomato } from "react-icons/si";

const App = () => {
  return (
    <>
      <div className=" mainbg">
        <div className="flex justify-center">
          <img src={logo} alt="" className="logo mt-10" />
        </div>

        <div className="flex justify-center">
          <ul className="wrapper">
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              {/* className="fab fa-facebook-f" */}
              <span>
                <AiFillFacebook className="" />
              </span>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
                <AiFillInstagram className="" />
              </span>
            </li>
            <li className="icon swiggy">
              <span className="tooltip">Swiggy</span>
              <span>
                <SiSwiggy className="" />
              </span>
            </li>
            <li className="icon zomato">
              <span className="tooltip">Zomato</span>
              <span>
                <SiZomato className="" />
              </span>
            </li>
          </ul>
        </div>
        <div className="banner-text  mt-32 text-lg md:text-2xl flex justify-center ">
          {" "}
          ....webstore coming soon
        </div>
      </div>
      <div className="footer w-full ">
        <div className="flex justify-center">&#169; samarthfoods</div></div>
      <img src={bgpic} alt="" className="backgroundpic border border-white" />
    </>
  );
};

export default App;
