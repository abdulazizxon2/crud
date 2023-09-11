import React from "react";
import { NavLink } from "react-router-dom";

export default function UchBox() {
    return (<div>
        <div className="videolar">
            <div className="card">
                <NavLink to={"/iframe"} onClick={()=>setvid(elem)}>
                    <img src="./img/logo-og.png" alt="" />
                </NavLink>
            </div>
            <div className="card">
                <iframe width="200" height="150" src="https://www.youtube.com/embed/xwaA2R7vJm8?si=zluVHhXhAZ21rd4o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

        </div>
    </div>);
}