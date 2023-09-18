import React from "react";
import { NavLink } from "react-router-dom";

export default function ChapBox() {
  return (<div>
    <div className="chapBox">
      <div className="birBox">
          <NavLink to={"/"}>
        <div className="pages">
          <i className="fa-solid fa-house"></i>
            <b>Home</b>
        </div>
          </NavLink>
      <NavLink to={"explore"}>
      <div className="pages">
          <i className="fa-regular fa-compass"></i>
          <h5>Explore</h5>
        </div>
      </NavLink>
       <NavLink to={"/obuna"}>
       <div className="pages">
          <i className="fa-solid fa-video"></i>
          <h5>Obunachilar</h5>
        </div>
       </NavLink>
      </div>
      <div className="birBox">
        <NavLink to={"/kitob"}>
        <div className="pages">
          <i className="fa-regular fa-file-video"></i>
          <h5>Librery</h5>
        </div>
        </NavLink>
        <NavLink to={"/history"}>
        <div className="pages">
          <i className="fa-solid fa-clock-rotate-left"></i>
          <h5>History</h5>
        </div>
        </NavLink>
        <div className="pages">
          <i className="fa-solid fa-play"></i>
          <h5>Explore</h5>
        </div>
        <div className="pages">
          <i className="fa-solid fa-video"></i>
          <h5>Your Videos</h5>
        </div>
        <div className="pages">
          <i className="fa-solid fa-thumbs-up"></i>
          <h5>Liked Videos</h5>
        </div>
        <div className="pages">
          <i className="fa-solid fa-angle-left fa-rotate-270"></i>
          <h5>Show More</h5>
        </div>
      </div>
      <div className="substicriptons">
        <div className="kantakt">
          <img src="./img/User-Avatar.png" alt="" />
          <b>James Gouse</b>
        </div>
        <div className="kantakt">
          <img src="./img/User-Avatar.png" alt="" />
          <b>James Gouse</b>
        </div>
        <div className="kantakt">
          <img src="./img/User-Avatar.png" alt="" />
          <b>James Gouse</b>
        </div>
        <div className="kantakt">
          <img src="./img/User-Avatar.png" alt="" />
          <b>James Gouse</b>
        </div>
        <div className="kantakt">
          <img src="./img/User-Avatar.png" alt="" />
          <b>James Gouse</b>
        </div>
        <div className="kantakt">
          <img src="./img/User-Avatar.png" alt="" />
          <b>James Gouse</b>
        </div>
        <div className="kantakt">
          <img src="./img/User-Avatar.png" alt="" />
          <b>James Gouse</b>
        </div>
      </div>
    </div>
  </div>);
}