import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Graph = ({ title, comment }) => {
  const location = useLocation(); // 현재 위치를 가져옵니다.

  const [waterResult, setWaterResult] = useState(0); // 초기값을 0으로 설정
  const [coffeeResult, setCoffeeResult] = useState(0); // 초기값을 0으로 설정
  const [teaResult, setTeaResult] = useState(0); // 초기값을 0으로 설정
  const [spaResult, setSpaResult] = useState(0); // 초기값을 0으로 설정
  const [juiceResult, setjuiceResult] = useState(0); // 초기값을 0으로 설정
  const [milkResult, setMilkResult] = useState(0); // 초기값을 0으로 설정

  useEffect(() => {
    // WATER와 COFFEE의 값을 로컬 스토리지에서 불러오기
    const water = localStorage.getItem("WATER") || "0";
    const coffee = localStorage.getItem("COFFEE") || "0";
    const tea = localStorage.getItem("TEA") || "0";
    const spa = localStorage.getItem("SPARKLING_WATER") || "0";
    const juice = localStorage.getItem("JUICE") || "0";
    const milk = localStorage.getItem("MILK") || "0";

    // 숫자로 변환 후 상태 저장
    setWaterResult(parseFloat(water));
    setCoffeeResult(parseFloat(coffee));
    setTeaResult(parseFloat(tea));
    setSpaResult(parseFloat(spa));
    setjuiceResult(parseFloat(juice));
    setMilkResult(parseFloat(milk));
  }, []);

  // totalWater 계산 (useEffect 이후 계산)
  const totalWater =
    waterResult + teaResult + spaResult + juiceResult + milkResult;

  return (
    <div className="stc-main-water">
      {/* 현재 경로가 /statistic인지 확인 */}
      {location.pathname === "/statistic" ? (
        <div className="sta-container">
          <div className="sta-main-water-title">오늘</div>
          <div className="sta-line"></div>
        </div>
      ) : (
        <div className="sta-none"></div>
      )}

      <div className="stc-main-water-sub-content">
        <div className="stc-main-water-sub-title">{title}</div>
        {location.pathname === "/statistic" ? (
          <div className="stc-main-water-sub-ml">{totalWater}ml</div>
        ) : (
          <div className="stc-main-water-sub-comment">{comment}</div>
        )}
      </div>
      <div className="stc-main-show-graph-container">
        <div className="stc-main-show-graph-ml-container">
          <div className="stc-main-show-graph-ml">
            <div className="stc-ml">2L</div>
            <div className="stc-grahp-line"></div>
          </div>
          <div className="stc-main-show-graph-ml">
            <div className="stc-ml">1,500</div>
            <div className="stc-grahp-line"></div>
          </div>
          <div className="stc-main-show-graph-ml">
            <div className="stc-ml">1000</div>
            <div className="stc-grahp-line"></div>
          </div>
          <div className="stc-main-show-graph-ml">
            <div className="stc-ml">500</div>
            <div className="stc-grahp-line"></div>
          </div>
        </div>
      </div>
      {location.pathname === "/statistic" ? (
        <div className="stc-main-show-graph">
          <div className="stc-main-show-graph-time">
            <div className="vertical"></div>
            8시
          </div>
          <div className="stc-main-show-graph-time">
            <div className="verticall"></div>12시
          </div>
          <div className="stc-main-show-graph-time">
            <div className="verticalll"></div>16시
          </div>
          <div className="stc-main-show-graph-time">
            <div className="verticallll"></div>20시
          </div>
        </div>
      ) : (
        <div className="stc-main-show-day">
          <div className="stc-main-show-days">
            <div className="vertical"></div>
            <div className="cvertical"></div>토
          </div>
          <div className="stc-main-show-days">
            <div className="vertical"></div>
            <div className="cvertical"></div>일
          </div>
          <div className="stc-main-show-days">
            <div className="vertical"></div>
            <div className="cverticall"></div>월
          </div>
          <div className="stc-main-show-days">
            <div className="vertical"></div>
            <div className="cvertical"></div>화
          </div>
          <div className="stc-main-show-days">
            <div className="verticalll"></div>
            <div className="cverticalll"></div>수
          </div>
          <div className="stc-main-show-days">목</div>
          <div className="stc-main-show-days">금</div>
        </div>
      )}
    </div>
  );
};

export default Graph;
