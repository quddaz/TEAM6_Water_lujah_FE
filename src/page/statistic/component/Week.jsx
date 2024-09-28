import React from "react";
import { useNavigate } from "react-router-dom";
import Graph from "./Graph";

const Week = () => {
  const navigate = useNavigate();
  return (
    <div className="stc-container">
      {/* <Header /> */}
      <div className="stc-header-container">
        <div className="stc-header">
          <div
            className="stc-header-m-m"
            onClick={() => {
              navigate("/statistic");
            }}
          >
            일
          </div>
          <div
            className="stc-header-w-w"
            onClick={() => {
              navigate("/week");
            }}
          >
            주
          </div>
        </div>
      </div>
      <div className="stc-main-container">
        <Graph
          title="이번주 받은 물세례💧"
          comment="구원에 가까워지고 있어요!"
        />
      </div>
      <div className="stc-main-container">
        <Graph
          title="주간 카페인 섭취량☕️"
          comment="카페인 섭취량이 증가했어요!"
        />
      </div>
    </div>
  );
};

export default Week;
