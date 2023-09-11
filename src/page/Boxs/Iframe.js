import React from "react";
import { NavLink } from "react-router-dom";
export default function Iframe({ setvid, inHistory, videos }) {
  return (<div>
    <div className="card">
            <div className="videoCards">
                {videos.map((elem, i) => {
                    return (
                        <NavLink to={"/iframe"} className="videoCard" key={i} onClick={() => {
                            setvid(elem); inHistory(elem);
                        }}>
                            <div className="preview">
                                <img src={elem.img} alt="" />
                            </div>
                            <div className="profile-photo">
                                <div className="flex-title">
                                    <img src={elem.profile} alt="" />
                                    <div className="video-title">
                                        <h4>{elem.title}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="author-vines">
                                <p>{elem.author}</p>
                                <p>{elem.views}</p>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
  </div>);
}