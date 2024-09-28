import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../assets/record/Vector.svg";

const DrinkRecord = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 선택한 ml 값을 상태로 관리
  const [totalMl, setTotalMl] = useState(0);

  // 버튼 클릭 시 ml 값을 추가하는 함수
  const handleMlSelect = (ml) => {
    setTotalMl((prevMl) => prevMl + ml); // 기존 값에 추가
  };

  return (
    <div className="drink-record-container">
      <div className="drink-record-header">
        <div
          className="drink-record-header-back"
          onClick={() => {
            navigate("/");
          }}
        >
          <Back />
        </div>
        <div className="drink-record-header-title">몇 ml 섭취 하셨나요?</div>
      </div>
      <div className="drink-record-main">
        <div className="drink-record-main-title">물</div>
        <div className="drink-record-main-ml">{totalMl}ml</div>{" "}
      </div>
      <div className="drink-record-select-container">
        <div className="drink-record-select-container-box">
          {" "}
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(30)}
          >
            30ML
          </div>
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(50)}
          >
            50ML
          </div>
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(100)}
          >
            100ML
          </div>
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(150)}
          >
            150ML
          </div>
        </div>
        <div className="drink-record-select-container-box">
          {" "}
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(200)}
          >
            200ML
          </div>
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(250)}
          >
            250ML
          </div>
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(300)}
          >
            300ML
          </div>
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(330)}
          >
            330ML
          </div>
        </div>
        <div className="drink-record-select-container-box">
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(400)}
          >
            400ML
          </div>
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(500)}
          >
            500ML
          </div>
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(600)}
          >
            600ML
          </div>
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(600)}
          >
            600ML
          </div>
        </div>
        <div className="drink-record-select-container-box">
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(800)}
          >
            800ML
          </div>
          <div
            className="drink-record-select-btn"
            onClick={() => handleMlSelect(1000)}
          >
            1000ML
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkRecord;
