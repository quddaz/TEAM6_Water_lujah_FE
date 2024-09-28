import React, { useState, useEffect } from "react";
import Sun from "../../assets/main/Sun.svg";
import Coffee from "../../assets/main/Coffee.svg";

function Index() {
  // 대문자로 시작하도록 변경
  const [teaResult, setTeaResult] = useState(0);
  const [spaResult, setSpaResult] = useState(0);
  const [juiceResult, setjuiceResult] = useState(0);
  const [milkResult, setMilkResult] = useState(0);
  const [waterResult, setWaterResult] = useState(0);
  const [coffeeResult, setCoffeeResult] = useState(0); // coffeeResult 상태 추가

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
    setCoffeeResult(parseFloat(coffee)); // coffeeResult 상태 업데이트
    setTeaResult(parseFloat(tea));
    setSpaResult(parseFloat(spa));
    setjuiceResult(parseFloat(juice));
    setMilkResult(parseFloat(milk));
  }, []);

  // totalWater 계산
  const totalWater =
    waterResult + teaResult + spaResult + juiceResult + milkResult;

  return (
    <>
      <div className="main_container">
        <div className="main_content">
          <div className="main_text">
            <div className="main_text1">
              물의 기적이 일어나고 있는 중입니다!
            </div>
            <div className="main_text2">오늘 목표 섭취량: 2L</div>
          </div>
          <div className="main_aquarium">
            <img
              src="https://quddaztestbucket.s3.ap-northeast-2.amazonaws.com/8.png"
              alt=""
            />
            <div className="aquarium_text">
              <div className="aquarium_percent">30%</div>
              <div className="aquarium_liter">{totalWater}ML</div>
            </div>
          </div>
        </div>
        <div className="main_banner">
          <div className="banner_container">
            <div className="weather_banner_header">오늘의 날씨</div>
            <div className="weather_banner_content_container">
              <div className="banner_content">
                <div className="content_header">햇빛이 많고 더운날</div>
                <div className="content_content">
                  500ml ~ 1000ml 추가적인 물 섭취를 추천드려요~
                </div>
              </div>
              <div className="banner_image">
                <img
                  src={Sun}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
            </div>
          </div>
          <div className="banner_container">
            <div className="caffeine_banner_header">오늘의 카페인</div>
            <div className="caffeine_banner_content_container">
              <div className="banner_content">
                <div className="content_header">오늘의 카페인 섭취량</div>
                <div className="content_content">
                  카페인 섭취 6시간 이후에 취침을 권장드립니다
                </div>
              </div>
              <div className="banner_image">
                <img
                  src={Coffee}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index; // 대문자로 시작하도록 변경
