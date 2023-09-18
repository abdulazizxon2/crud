import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Box from "./Box";
import Iframe from "./Boxs/Iframe";
import Explore from "./Boxs/Explore";
import Obuna from "./Obuna/Obuna";
import Obunam from "./Obuna/Obunam";
import Kutubxona from "./Kutubxona/Kutubxona";
import History from "./Kutubxona/History";

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
      link: "https://www.youtube.com/embed/mA_O7onmKQ8?si=YT5DtLDmZtbWXIqU",
      shortImg:"./img/youtube-shorts-icon.png",
      pros:"21 тыс. просмотров 23 часа назад"
    },
    {
      id: 2,
      img: "./img/logo-og.png",
      profile: "./img/User-Avatar.png",
      title: "ASMR Programming - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/Kh6PfBhuLT8?si=2fAeevrBqyenVwB7",
      shortImg:"./img/youtube-shorts-icon.png",
      pros:"21 тыс. просмотров 23 часа назад"
    },
    {
      id: 3,
      img: "./img/logo-og.png",
      profile: "./img/User-Avatar.png",
      title: "ASMR Programming - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/x5RbMNOlVT4?si=m4SYeDRKLcPyViIl",
      shortImg:"./img/youtube-shorts-icon.png",
      pros:"21 тыс. просмотров 23 часа назад"
    },
    {
      id: 4,
      img: "./img/logo-og.png",
      profile: "./img/User-Avatar.png",
      title: "ASMR Programming - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/x5RbMNOlVT4?si=m4SYeDRKLcPyViIl",
      shortImg:"./img/youtube-shorts-icon.png",
      pros:"21 тыс. просмотров 23 часа назад"
    },
    {
      id: 5,
      img: "./img/logo-og.png",
      profile: "./img/User-Avatar.png",
      title: "ASMR Programming - Coding IOS(Iphone Calclutor -No Talking) ",
      aUthor: "Proghub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/x5RbMNOlVT4?si=m4SYeDRKLcPyViIl",
      shortImg:"./img/youtube-shorts-icon.png",
      pros:"21 тыс. просмотров 23 часа назад"
    },
  ])
  let [obuna,setObuna]=useState([
    {
      rasmi:"./img/PngItem_6785829.png",
      nomi:"People Vs Food",
      obunachisi:"14,9 млн подписчиков"
    },
    {
      rasmi:"./img/PngItem_6785829.png",
      nomi:"People Vs Food",
      obunachisi:"14,9 млн подписчиков"
    },
    {
      rasmi:"./img/PngItem_6785829.png",
      nomi:"People Vs Food",
      obunachisi:"14,9 млн подписчиков"
    },
    {
      rasmi:"./img/PngItem_6785829.png",
      nomi:"People Vs Food",
      obunachisi:"14,9 млн подписчиков"
    },
  ])
  let [iframe, setIframe] = useState([]);
  function setvid(obj) {
    setIframe(iframe = [])
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
      <Route path="/" element={<Box setvid={setvid} videos={videos} />} />
      <Route path="/explore" element={<Explore setvid={setvid} videos={videos} />} />
      <Route path="/iframe" element={<Iframe iframe={iframe} setIframe={setIframe} videos={videos} setVidoe={setVideo} inHistory={inHistory}/>} />
      <Route path="/obuna" element={<Obuna obuna={obuna} setObuna={setObuna}/>}/>
      <Route path="/obunam" element={<Obunam setvid={setvid} videos={videos} />}/>
      <Route path="/kitob" element={<Kutubxona />}/>
      <Route path="/history" element={<History />}/>
    </Routes>
  </div>);
}