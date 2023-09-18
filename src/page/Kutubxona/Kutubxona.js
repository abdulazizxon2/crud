import React from "react";
import { NavLink } from "react-router-dom";
import ChapBox from "../Boxs/ChapBox";
import Ikkibox from "../Boxs/Ikkibox";

export default function Kutubxona() {
    return (<div>
      <div className="kitoblar">
        <div className="chapkitob">
            <ChapBox />
        </div>
        <div className="ongkitob">
            <Ikkibox />
            <NavLink to={"/kitob"}>
            <div className="history">
            <i class="fa-solid fa-notes-medical"></i>
                <h1>Войдите в аккаунт</h1>
                <p>Здесь вы увидите сохраненные видео и те, которые вам понравились.</p>
                <i class="fa-regular fa-user"></i>
                <input type="submit" name="" id="voyti" value="Войти" />
            </div>
        </NavLink>
        </div>
      </div>
    </div>);
}