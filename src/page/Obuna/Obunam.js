import React from "react";
import { NavLink } from "react-router-dom";
import ChapBox from "../Boxs/ChapBox";
import Ikkibox from "../Boxs/Ikkibox";

export default function Obunam({ setvid, videos }) {
    return (<div>
        <div className="padpischik">
            <div className="chappadpischik">
                <ChapBox />
            </div>
            <div className="ongpadpischik">
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
                                                <p>{elem.pros}</p>
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
                                                <p>{elem.pros}</p>
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
                                                <p>{elem.pros}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="cardsh">
                        <div className="videolar">
                            {videos.map((elem, i) => {
                                return (
                                    <div className="videos" key={i}>
                                        <NavLink to={"/iframe"} onClick={() => setvid(elem)}>
                                            <img src={elem.shortImg} alt="" />
                                        </NavLink>  <div className="nomi">
                                            <div className="tit">
                                                <b>{elem.title}</b>
                                                <p>{elem.aUthor}</p>
                                                <p>{elem.pros}</p>
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