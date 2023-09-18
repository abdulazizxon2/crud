import React from "react";

export default function Navbar() {
    return <div>
<input type="checkbox" name="" id="check"></input>
        <div className="navbar">
            <div className="chapnavbar">
            <div className="nav_hamburger">
            <label className="hamburger" htmlFor="check">
                <i className="fa-solid fa-bars"></i></label>
          </div>
                <div className="logo">
                <i className="fa-brands fa-youtube"></i>
                <h1>YouTube</h1>
                </div>
            </div>
            <div className="ortanabar">
                <input type="search" name="" id="search" placeholder="Search"/>
                <button id="lupa"><i className="fa-solid fa-magnifying-glass"></i></button>
                <button id="mic"><i className="fa-solid fa-microphone"></i></button>
            </div>
            <div className="ongnavbar">
                <div className="icons">
                    <i className="fa-solid fa-folder-plus" title="Saved"></i>
                    <i className="fa-regular fa-bell" title="News"></i>
                </div>
                <img src="./img/User-Avatar.jpg" alt="" title="Your profile"/>
            </div>
        </div>
    </div>;
}