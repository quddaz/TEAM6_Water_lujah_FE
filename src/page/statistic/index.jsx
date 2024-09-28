import React, { useState, useEffect } from "react";
import { ReactComponent as Up } from "../../assets/statistic/Up.svg";
import { ReactComponent as Down } from "../../assets/statistic/Down.svg";
import Graph from "./component/Graph";
import { useNavigate } from "react-router-dom";
import Header from "./component/Header";

const Statistic = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [caffeineIntake, setCaffeineIntake] = useState(0); // 카페인 섭취량 상태 추가

  useEffect(() => {
    // WATER와 COFFEE의 값을 로컬 스토리지에서 불러오기

    const coffee = localStorage.getItem("COFFEE");

    setCaffeineIntake(coffee); // COFFEE 값을 상태로 저장
  }, []);

  // const totalWater =
  //   (parseFloat(water) || 0) +
  //   (parseFloat(tea) || 0) +
  //   (parseFloat(spa) || 0) +
  //   (parseFloat(juice) || 0) +
  //   (parseFloat(milk) || 0);
  return (
    <div className="stc-container">
      {/* <Header /> */}
      <div className="stc-header-container">
        <div className="stc-header">
          <div
            className="stc-header-m"
            onClick={() => {
              navigate("/statistic");
            }}
          >
            일
          </div>
          <div
            className="stc-header-w"
            onClick={() => {
              navigate("/week");
            }}
          >
            주
          </div>
        </div>
      </div>
      <div className="stc-main-container">
        <Graph title="시간별 받은 물세례💧" />
        <div className="stc-main-cafe">
          <div className="stc-main-cafe-title-container">
            <div className="stc-main-cafe-title">오늘 카페인 섭취량☕️</div>
            <div className="stc-main-cafe-mg">{caffeineIntake}mg</div>{" "}
            {/* 로컬 스토리지에서 불러온 값 표시 */}
          </div>
          <div className="stc-main-cafe-content-container">
            <div className="stc-main-cafe-content">
              최근 카페인 섭취량이 더 늘어났어요!
            </div>
            <div className="stc-main-cafe-sub-content">
              내일은 카페인 대신 물섭취를 권장드려요
            </div>
          </div>
          <div className="stc-show-icon">
            <Up />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
