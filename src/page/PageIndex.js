import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Box from "./Box";
import BirVideo from "./Boxs/BirVideo";
import Iframe from "./Boxs/Iframe";

export default function PageIndex() {
  let [videos, setVideo] = useState([
    {
      id: 1,
      img: "./img/logo-og.png",
      profile: "./img/User-Avatar.png",
      title: "ASMR Programming - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/x5RbMNOlVT4?si=m4SYeDRKLcPyViIl"
    },
    {
      id: 2,
      img: "./img/logo-og.png",
      profile: "./img/User-Avatar.png",
      title: "ASMR Programming - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/x5RbMNOlVT4?si=m4SYeDRKLcPyViIl"
    },
    {
      id: 3,
      img: "./img/logo-og.png",
      profile: "./img/User-Avatar.png",
      title: "ASMR Programming - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/x5RbMNOlVT4?si=m4SYeDRKLcPyViIl"
    },
    {
      id: 4,
      img: "./img/logo-og.png",
      profile: "./img/User-Avatar.png",
      title: "ASMR Programming - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/x5RbMNOlVT4?si=m4SYeDRKLcPyViIl"
    },
    {
      id: 5,
      img: "./img/logo-og.png",
      profile: "./img/User-Avatar.png",
      title: "ASMR Programming - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/x5RbMNOlVT4?si=m4SYeDRKLcPyViIl"
    },
  ])
  let [iframe, setIframe] = useState([]);
  function setvid(obj) {
    setIframe([...iframe, obj]);
  }
  let [history, setHistory] = useState([]);
  function inHistory(obj) {
    if (history.filter((i) => i.id === obj.id).length === 0) {
      setHistory([obj, ...history]);
    }
  }
  return (<div>
    <Routes>
      <Route path="/" element={<Box />} />
      <Route path="/iframe" element={<Iframe  iframe={iframe} setIframe={setIframe} />} />
      <Route path="/birvideo" element={<BirVideo videos={videos} setVidoe={setVideo}setvid={setvid} inHistory={inHistory}/>} />
    </Routes>
  </div>);
}