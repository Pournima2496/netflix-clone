import React from "react";
import "./banner.scss";
const Banner = () => {

function trancate(str, n) {
  return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        <h1 className="banner_desc">{
          trancate('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae iste consequuntur, repudiandae ipsa assumenda quidem dolores dolorem? Eum, deleniti molestias.', 150)
        }</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
