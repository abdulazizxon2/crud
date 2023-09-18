import React from "react";
import ChapBox from "./ChapBox";
import Ikkibox from "./Ikkibox";
import { NavLink } from "react-router-dom";

export default function Explore({ setvid, videos }) {

    return (<div>
        <div className="explore">
            <ChapBox />
            <div className="ongexplore">
            <Ikkibox />
        <div className="cardlar">
            <div className="card">
                <div className="videolar">
                    {videos.map((elem, i) => {
                        return (
                            <div className="videos" key={i}>
                                <NavLink to={"/iframe"} onClick={() => setvid(elem)}>
                                    <img src={elem.img} alt="" />
                                </NavLink>  <div className="nomi">
                                    <img className="profile" src={elem.profile} alt="" />
                                    <div className="tit">
                                        <b>{elem.title}</b>
                                        <p>{elem.aUthor}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="card">
                <div className="videolar">
                    {videos.map((elem, i) => {
                        return (
                            <div className="videos" key={i}>
                                <NavLink to={"/iframe"} onClick={() => setvid(elem)}>
                                    <img src={elem.img} alt="" />
                                </NavLink>
                                <div className="nomi">
                                    <img className="profile" src={elem.profile} alt="" />
                                    <div className="tit">
                                        <b>{elem.title}</b>
                                        <p>{elem.aUthor}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>);

}