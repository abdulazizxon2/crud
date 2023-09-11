import React from "react";
import ChapBox from "./Boxs/ChapBox";
import UchBox from "./Boxs/UchBox";
export default function Box() {
  return (<div>
    <div className="box">
      <ChapBox />
      <div className="ongBox">
        <div className="ikkiBox">
          <b>All</b>
          <b>Music</b>
          <b>Kino</b>
          <b>Music</b>
          <b>Kino</b>
          <b>Music</b>
          <b>Kino</b>
        </div>
        <UchBox />
      </div>
    </div>
  </div>);
}