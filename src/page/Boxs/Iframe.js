import React from "react";
export default function Iframe({ setvid, inHistory, iframe }) {
    return (<div>
        <div className="card">
            <div className="videoCards">
                {iframe.map((elem, i) => {
                    return (
                        <>
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
                        </>
                    );
                })}
            </div>
        </div>
    </div>);
}