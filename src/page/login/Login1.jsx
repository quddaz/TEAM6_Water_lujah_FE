import React, { useState } from "react";
import { ReactComponent as MaleIcon } from "../../assets/login/Male.svg";
import { ReactComponent as FemaleIcon } from "../../assets/login/Female.svg";
import Progress from "../../assets/login/Progress1.svg";
import { useNavigate } from "react-router-dom";

function Login1() {
  const [gender, setGender] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const onMaleGenderClick = () => {
    setGender("MALE");
  };
  const onFemaleGenderClick = () => {
    setGender("FEMALE");
  };

  return (
    <>
      <div className="login1_container">
        <div className="login1_text">
          <div className="login1_text1">성별을 선택해주세요</div>
          <div className="login1_text2">
            일일 수분 섭취 목표를 개별적으로 계산해 드립니다.
          </div>
        </div>
        <div className="login_gender">
          <div className="gender" onClick={onMaleGenderClick}>
            <div className="login1_text1">남자</div>
            <MaleIcon
              className="gender_icon"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className="gender" onClick={onFemaleGenderClick}>
            <div className="login1_text1">여자</div>
            <FemaleIcon
              className="gender_icon"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
        </div>
        <div>
          <div className="login1_progress">
            <img
              src={Progress}
              alt=""
              style={{ width: "42px", height: "6px" }}
            />
          </div>
          <div className="login1_next_button">
            <button
              className="next_button"
              onClick={() => {
                navigate("/login2", { state: { gender: gender } });
              }}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login1;
