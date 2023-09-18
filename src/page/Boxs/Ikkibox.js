import React from "react";
import { NavLink } from "react-router-dom";

export default function Ikkibox() {
    return (<div>
        <div className="ikkiBox">
            <NavLink to={"/"}>
            <b>All</b>
            </NavLink>
            <NavLink to={"/explore"}>
            <b>Music</b>
            </NavLink>
            <b>Kino</b>
            <b>Music</b>
            <b>Kino</b>
            <b>Music</b>
            <b>Kino</b>
        </div>
    </div>);
}