import React from "react";
import ChapBox from "./ChapBox";
import Ikkibox from "./Ikkibox";
export default function Iframe({ iframe }) {
    return (<div>
        <div className="boxes">
            <ChapBox />
            <div className="videoCards" >
            <Ikkibox />
                <div className="card ">
                    {iframe.map((elem, i) => {
                        return (
                            <div key={i}>
                                <div className="yol" >
                                    <div className="chapyol">
                                        <div className="card" >
                                            <iframe width="967" height="600" src={elem.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                        </div>
                                    </div>
                                    <div className="ongyol">
                                        <div className="card" >
                                            <iframe width="200" height="150" src={elem.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                        </div>
                                        <div className="card" >
                                            <iframe width="200" height="150" src={elem.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                        </div>
                                        <div className="card" >
                                            <iframe width="200" height="150" src={elem.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                        </div>
                                        <div className="card" >
                                            <iframe width="200" height="150" src={elem.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>);
}