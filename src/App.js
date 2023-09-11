import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./style/Style.css"
import PageIndex from "./page/PageIndex";
function App() {
  return (
    <>
    <div className="kontener">
    <Navbar />
    <PageIndex />
    </div>
    </>
  );
}
export default App;
