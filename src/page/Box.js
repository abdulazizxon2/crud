import React from "react";
import ChapBox from "./Boxs/ChapBox";
import UchBox from "./Boxs/UchBox";
import Ikkibox from "./Boxs/Ikkibox";
export default function Box(prop) {
  return (<div>
    <div className="box">
      <ChapBox />
      <div className="ongBox">
      <Ikkibox />
        <UchBox setvid={prop.setvid} videos={prop.videos} />
      </div>
    </div>
  </div>);
}