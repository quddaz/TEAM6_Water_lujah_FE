import React from "react";
import Progress from "../../assets/login/Progress4.svg";
import Rain from "../../assets/main/Rain.svg";
import Cloud from "../../assets/main/Cloud.svg";
import Sun from "../../assets/main/Sun.svg";
function Login4() {
  return (
    <>
      <div className="login4_container">
        <div className="login4_text">오늘 날씨는 어떤가요?</div>
        <div className="weather_select">
          <div className="weather">
            <div className="weather_content">
              <div>추움</div>
              <div>바람이 많고 비 오는날</div>
            </div>
            <div className="weather_image">
              <img
                src={Rain}
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </div>
          <div className="weather">
            <div className="weather_content">
              <div>보통</div>
              <div>온대 기후</div>
            </div>
            <div className="weather_image">
              <img
                src={Cloud}
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </div>
          <div className="weather">
            <div className="weather_content">
              <div>더움</div>
              <div>햇빛이 많고 더운 날</div>
            </div>
            <div className="weather_image">
              <img src={Sun} alt="" style={{ width: "60px", height: "60px" }} />
            </div>
          </div>
        </div>
        <div className="login4_progress">
          <img src={Progress} alt="" />
        </div>
        <div className="login4_next_button">
          <button className="login4_btn">다음</button>
        </div>
      </div>
    </>
  );
}

export default Login4;
