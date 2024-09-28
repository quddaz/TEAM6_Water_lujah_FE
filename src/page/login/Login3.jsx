import React from "react";
import Progress from "../../assets/login/Progress3.svg";

function Login3() {
  return (
    <>
      <div className="login3_container">
        <div className="login3_text">
          <div className="login3_text1">65세 이상이신가요?</div>
          <div className="login3_text2">
            65세를 기준으로 수분 섭취 권장량을 추천해주고 있습니다.
          </div>
        </div>

        <div className="login3_btn_container">
          <button className="login3_btn">아니오</button>
          <button className="login3_btn">예</button>
        </div>
        <div className="login3_progress">
          <img src={Progress} alt="" />
        </div>
      </div>
    </>
  );
}

export default Login3;
