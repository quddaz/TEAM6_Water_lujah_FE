import React from "react";
import Skyblue from "../assets/main/Skyblue.svg";
import White from "../assets/main/White.svg";
import Logo from "../assets/main/Logo.svg";

function LogoPage() {
  return (
    <div className="logo_container">
      <div className="logo">
        <img src={Logo} alt="" style={{ width: "450px" }} />
      </div>
      <div className="logo_background">
        <img
          className="skyblue"
          src={Skyblue}
          alt=""
          style={{ width: "450px" }}
        />
        <img className="white" src={White} alt="" style={{ width: "450px" }} />
      </div>
    </div>
  );
}

export default LogoPage;
