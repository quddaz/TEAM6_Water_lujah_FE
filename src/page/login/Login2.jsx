import React from "react";
import Progress from "../../assets/login/Progress2.svg";
import { useNavigate } from "react-router-dom";

function Login2() {
  const navigate = useNavigate();

  return (
    <>
      <div className="login2_container">
        <div className="login2_text">
          <div className="login2_text1">몸무게를 입력해 주세요</div>
          <div className="login2_text2">정수로 입력해 주세요</div>
        </div>
        <div className="input_weight">
          <input type="text" placeholder="00" />
          Kg
        </div>
        <div className="login1_progress">
          <img src={Progress} alt="" />
        </div>
        <div className="login2_next_button">
          <button
            className="next_button"
            onClick={() => {
              navigate("/login3");
            }}
          >
            다음
          </button>
        </div>
      </div>
    </>
  );
}

export default Login2;
